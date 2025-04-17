// Import functions
import { deleteTask } from "./delete-task";
import { displayEditTaskForm } from "./task-edit-form";
import { validateTitleInput, validateDueDateInput, validateForm } from "./form-validation";
import { createOrUpdateTask } from "./task-utils";
import { displayTaskDetails } from "./task-details";

// Get HTML elements
const taskList = document.querySelector('#task-list');

// Event delegation
taskList.addEventListener('click', (event) => {
  const button = event.target.parentNode;

  // Delete or edit task
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
    // Display task details
    displayTaskDetails(parseInt(button.value));
  }
});
