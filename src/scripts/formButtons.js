import { NewToDo } from './newTodo';

// Close Modal when user clicks on Cancel button
export function closeModal(modal) {
  modal.close();
}


export function createNewTask(form) {
  
  // Create new formData object
  const formData = new FormData(form);

  // Convert formData to JS object
  const taskData = Object.fromEntries(formData);
  console.log(taskData);

  // Create new task
  const task = new NewToDo(taskData);
  console.log(task);
  

}