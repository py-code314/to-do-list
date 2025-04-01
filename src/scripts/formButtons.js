import { validateForm } from './formInputs';
import { NewToDo } from './newTodo';

export function handleFormButtons(
  modal,
  form,
  titleInput,
  dueDateInput,
  titleError,
  dueDateError
) {
  // Close dialog when user presses Esc key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modal.close();
    }
  });

  // Do nothing if user clicks Close or Cancel buttons
  modal.addEventListener('click', (event) => {
    // console.log(event);
    // Pass 'cancel' to the dialog so that it doesn't return 'submit'

    if (event.target.id === 'cancel') {
      // modal.close('cancel');
      modal.close();
    }
  });

  // Submit form when user clicks Add button
  modal.addEventListener('submit', () => {
    validateForm(form, titleInput, dueDateInput, titleError, dueDateError);

    // Create new formData object
    const formData = new FormData(form);

    // Convert formData to JS object
    const taskData = Object.fromEntries(formData);
    console.log(taskData);

    // Create new task
    const task = new NewToDo(taskData);
    // console.log(task);
  });
}
