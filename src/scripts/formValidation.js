// Using Constraint Validation API

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
  } else if (dueDateInput.validity.rangeUnderflow) {
    dueDateError.textContent = "Date can't be in the past";
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
  } else {
    titleError.textContent = '';
  }

  if (dueDateInput.validity.valueMissing) {
    dueDateError.textContent = 'Please select a date';
    isValid = false;
  } else if (dueDateInput.validity.rangeUnderflow) {
    dueDateError.textContent = "Date can't be in the past";
    isValid = false;
  } else {
    dueDateError.textContent = '';
  }
  return isValid;
}
