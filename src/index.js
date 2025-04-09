// import styles
import './styles/styles.css';
// import JS modules
import './scripts/newTodo';
import './scripts/filterTasks';
import './scripts/addToProject';
import './scripts/taskDetails'
import './scripts/search'

/* Import functions */
import { displayNewTaskForm } from './scripts/newTask';
import {
  validateTitleInput,
  validateDueDateInput,
  validateForm,
} from './scripts/formValidation';
import { createOrUpdateTask } from './scripts/formData';
import { displayTask } from './scripts/displayTask';
import { addToLocalStorage } from './scripts/localStorage';
import { restoreFromLocalStorage } from './scripts/localStorage';
import { deleteTask } from './scripts/deleteTask';
import { displayEditTaskForm } from './scripts/editTask';
import { showNewProjectForm } from './scripts/newProject';

import { tasks } from './scripts/formData';
import { displayTaskDetails } from './scripts/taskDetails';

const taskList = document.querySelector('#task-list');

// Event listener for Add Task button
const addTaskButton = document.querySelector('#addTask');
addTaskButton.addEventListener('click', () => {
  const {
    modal,
    taskForm,
    titleInput,
    dueDateInput,
    titleError,
    dueDateError,
    cancelButton,
  } = displayNewTaskForm();

  cancelButton.addEventListener('click', () => {
    modal.close();
  });

  titleInput.addEventListener('input', () => {
    validateTitleInput(titleInput, titleError);
  });
  dueDateInput.addEventListener('input', () => {
    validateDueDateInput(dueDateInput, dueDateError);
  });
  taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const isFormValid = validateForm(
      titleInput,
      dueDateInput,
      titleError,
      dueDateError
    );

    if (isFormValid) {
      modal.close();

      createOrUpdateTask(taskForm);
    }
  });
});

restoreFromLocalStorage();

// Event delegation
taskList.addEventListener('click', (event) => {
  const buttonId = event.target.parentNode.id;

  if (buttonId === 'deleteButton') {
    deleteTask(parseInt(event.target.parentNode.value));
  } else if (buttonId === 'editButton') {
    const {
      modal,
      taskForm,
      titleInput,
      dueDateInput,
      titleError,
      dueDateError,
      cancelButton,
    } = displayEditTaskForm(parseInt(event.target.parentNode.value));

    cancelButton.addEventListener('click', () => {
      modal.close();
    });

    // Validate title input
    titleInput.addEventListener('input', () => {
      validateTitleInput(titleInput, titleError);
    });

    // Validate date input
    dueDateInput.addEventListener('input', () => {
      validateDueDateInput(dueDateInput, dueDateError);
    });
    taskForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // Validate form on submit
      const isFormValid = validateForm(
        titleInput,
        dueDateInput,
        titleError,
        dueDateError
      );

      if (isFormValid) {
        modal.close();
        createOrUpdateTask(taskForm);
      }
    });
  } else if (buttonId === 'detailsButton') {
    displayTaskDetails(parseInt(event.target.parentNode.value))
  }
});
