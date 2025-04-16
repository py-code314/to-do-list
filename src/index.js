// import styles
import './styles/styles.css';
// import JS modules
import './scripts/new-task';
import './scripts/new-task-form';
import './scripts/filter-tasks';
import './scripts/project-task-handler';
import './scripts/task-details';
import './scripts/search';
import './scripts/completed-tasks';
import './scripts/display-task';

/* Import functions */
import { displayNewTaskForm } from './scripts/new-task-form';
import {
  validateTitleInput,
  validateDueDateInput,
  validateForm,
} from './scripts/form-validation';
import { createOrUpdateTask } from './scripts/task-utils';
import { displayTask } from './scripts/display-task';
import { addToLocalStorage } from './scripts/local-storage';
import { restoreFromLocalStorage } from './scripts/local-storage';
import { deleteTask } from './scripts/delete-task';
import { displayEditTaskForm } from './scripts/edit-task-form';
import { showNewProjectForm } from './scripts/new-project';

import { tasks } from './scripts/new-task';
import { displayTaskDetails } from './scripts/task-details';
import { displayInboxTasks } from './scripts/filter-tasks';

// document.addEventListener('DOMContentLoaded', displayInboxTasks)
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
  } else if (button.classList.contains('button--details')) {
    displayTaskDetails(parseInt(button.value));
  }
});
