import { NewTask, tasks } from './new-task';
const taskList = document.querySelector('#task-list');


export function createOrUpdateTask(form) {
  // Create new formData object
  const formData = new FormData(form);

  // Convert formData to JS object
  const taskData = Object.fromEntries(formData);

  // Create new task
  const task = new NewTask(taskData);

  // Check if task is already in tasks array
  const taskIndex = tasks.findIndex(
    (oldTask) => oldTask.id === parseInt(task.id)
  );

  if (taskIndex !== -1) {
    tasks[taskIndex] = task;
  } else {
    tasks.push(task);
  }

  // Fire Custom Event after tasks updated
  taskList.dispatchEvent(new CustomEvent('tasksUpdated'));
}
