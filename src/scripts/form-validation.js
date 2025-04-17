/* Using Constraint Validation API */

/* Validate if the title input field is empty */
export function validateTitleInput(titleInput, titleError) {
  if (titleInput.validity.valueMissing) {
    titleError.textContent = 'Title must not be empty';
  } else {
    titleError.textContent = '';
  }
}

/* Validate if the due date input field is empty */
export function validateDueDateInput(dueDateInput, dueDateError) {
  if (dueDateInput.validity.valueMissing) {
    dueDateError.textContent = 'Please select a date';
  } else {
    dueDateError.textContent = '';
  }
}

/* Validate form before submitting */
export function validateForm(
  titleInput,
  dueDateInput,
  titleError,
  dueDateError
) {
  let isValid = true;
  if (titleInput.validity.valueMissing) {
    titleError.textContent = 'Title must not be empty';
    isValid = false;
    titleInput.focus();
  } else {
    titleError.textContent = '';
  }

  if (dueDateInput.validity.valueMissing) {
    dueDateError.textContent = 'Please select a date';
    isValid = false;
  } else {
    dueDateError.textContent = '';
  }
  return isValid;
}
