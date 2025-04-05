import { NewTask } from './newTodo';
// import { displayTasks } from './displayTasks';

const taskList = document.querySelector('#task-list');
// console.log(content);

// Initialize State
export let tasks = [];

export function createNewTask(form) {
  // Create new formData object
  const formData = new FormData(form);
  console.log(formData);

  // Convert formData to JS object
  const taskData = Object.fromEntries(formData);
  console.log(taskData);

  // Create new task
  const task = new NewTask(taskData);
  console.log(task);
  console.log(task.id);

  // Check if task is already in tasks array
  const taskIndex = tasks.findIndex(oldTask => oldTask.id === parseInt(task.id))
  console.log(taskIndex);
  if (taskIndex !== -1) {
    tasks[taskIndex] = task
  } else {
    tasks.push(task)
  }

  // Add Task  to tasks array
  // tasks.push(task);
  console.log(tasks);

  // Fire Custom Event after tasks updated
  taskList.dispatchEvent(new CustomEvent('itemsUpdated'))
}
