// Using Constraint Validation API

import { tasks } from './newTask';
// const taskList = document.querySelector('#task-list');

// // Function to handle tasks update
// function updateTaskTitles() {
//   const taskTitles = tasks.map((task) => task.title);
//   return {taskTitles}
// }

// // Listen for 'tasksUpdated' event
// taskList.addEventListener('tasksUpdated', updateTaskTitles);


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
  }
  // else if (dueDateInput.validity.rangeUnderflow) {
  //   dueDateError.textContent = "Date can't be in the past";
  // }
  else {
    dueDateError.textContent = '';
  }
}

export function validateForm(
  titleInput,
  dueDateInput,
  titleError,
  dueDateError
) {
  // const { taskTitles } = updateTaskTitles()
  // console.log(taskTitles, titleInput.value);
  let isValid = true;
  if (titleInput.validity.valueMissing) {
    titleError.textContent = 'Title must not be empty';
    isValid = false;
    titleInput.focus();
  }
  // else if (taskTitles.includes(titleInput.value)) {
    
  //   console.log('title exists');
  //   titleError.textContent = 'Task with same name already exists.'
  //   isValid = false;
  //   titleInput.focus();
  // }
  else {
    titleError.textContent = '';
  }

  if (dueDateInput.validity.valueMissing) {
    dueDateError.textContent = 'Please select a date';
    isValid = false;
  }
  // else if (dueDateInput.validity.rangeUnderflow) {
  //   dueDateError.textContent = "Date can't be in the past";
  //   isValid = false;
  // }
  else {
    dueDateError.textContent = '';
  }
  return isValid;
}
