// Using Constraint Validation API

import { tasks } from './new-task';

export function validateTitleInput(titleInput, titleError) {
  if (titleInput.validity.valueMissing) {
    titleError.textContent = 'Title must not be empty';
  } else {
    titleError.textContent = '';
  }
}

export function validateDueDateInput(dueDateInput, dueDateError) {
  if (dueDateInput.validity.valueMissing) {
    dueDateError.textContent = 'Please select a date';
  } else {
    dueDateError.textContent = '';
  }
}

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
