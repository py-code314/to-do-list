// Import functions
import { displayNewTaskForm } from './new-task-form';
import {
  validateTitleInput,
  validateDueDateInput,
  validateForm,
} from './form-validation';
import { createOrUpdateTask } from './task-utils';

// Get elements from DOM
const addTaskButton = document.querySelector('#addTask');

// Event listeners
addTaskButton.addEventListener('click', () => {
  // Display new task form
  const {
    modal,
    taskForm,
    titleInput,
    dueDateInput,
    titleError,
    dueDateError,
    cancelButton,
  } = displayNewTaskForm();

  // Close form
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
  // Submit form
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
