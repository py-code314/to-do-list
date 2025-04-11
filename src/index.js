// import styles
import './styles/styles.css';
// import JS modules
import './scripts/newTaskForm';
import './scripts/filterTasks';
import './scripts/project-task-handler';
import './scripts/taskDetails';
import './scripts/search';
import './scripts/completedTasks'

/* Import functions */
import { displayNewTaskForm } from './scripts/newTaskForm';
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
    // modal.close();
    modal.remove();
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
      // modal.close();
      modal.remove();

      createOrUpdateTask(taskForm);
    }
  });
});

restoreFromLocalStorage();

// Event delegation
taskList.addEventListener('click', (event) => {
  const button = event.target.parentNode;

  if (button.classList.contains('button--delete')) {
    deleteTask(parseInt(button.value));
  } else if (button.classList.contains('button--edit')) {
    const {
      modal,
      taskForm,
      titleInput,
      dueDateInput,
      titleError,
      dueDateError,
      cancelButton,
    } = displayEditTaskForm(parseInt(button.value));

    cancelButton.addEventListener('click', () => {
      // modal.close();
      modal.remove();
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
        // modal.close();
        modal.remove();
        createOrUpdateTask(taskForm);
      }
    });
  } else if (button.classList.contains('button--details')) {
    displayTaskDetails(parseInt(button.value));
  }
});
