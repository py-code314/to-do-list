export function validateForm(
  taskForm,
  titleInput,
  dueDateInput,
  titleError,
  dueDateError
) {
  // Show Error message if Title input field is empty
  titleInput.addEventListener('input', () => {
    if (titleInput.validity.valid) {
      titleError.textContent = '';
    } else {
      showError();
    }
  });

  // Show Error message if Due Date input field is empty
  dueDateInput.addEventListener('input', () => {
    if (dueDateInput.validity.valid) {
      dueDateError.textContent = '';
    } else {
      showError();
    }
  });

  // Check Form validity on submission
  taskForm.addEventListener('submit', (event) => {
    if (!titleInput.validity.valid) {
      showError();
      titleInput.focus()
      event.preventDefault();
    }
    if (!dueDateInput.validity.valid) {
      showError();
      event.preventDefault();
    }
  });

  // Function to show Error messages
  function showError() {
    if (titleInput.validity.valueMissing) {
      titleError.textContent = 'Title must not be empty';
    }
    if (dueDateInput.validity.valueMissing) {
      dueDateError.textContent = 'Please select a date';
    } else if (dueDateInput.validity.rangeUnderflow) {
      dueDateError.textContent = "Date can't be lower than today's date";
    }
  }
}
