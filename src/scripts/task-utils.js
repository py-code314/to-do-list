// Import data
import { NewTask, tasks } from './new-task';

// Get elements from DOM
const taskList = document.querySelector('#task-list');


/* Creates a new task or updates an existing task */
export function createOrUpdateTask(form) {
  // Create new formData object
  const formData = new FormData(form);

  // Convert formData to JS object
  const taskData = Object.fromEntries(formData);

  // Create new task
  const task = new NewTask(taskData);

  // Check if task is already in tasks array
  const existingTaskIndex = tasks.findIndex(
    (existingTask) => existingTask.id === parseInt(task.id)
  );

  if (existingTaskIndex !== -1) {
    tasks[existingTaskIndex] = task;
  } else {
    tasks.push(task);
  }

  // Fire Custom Event after tasks updated
  taskList.dispatchEvent(new CustomEvent('tasksUpdated'));
}
