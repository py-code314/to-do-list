// Import data
import { tasks } from './new-task';

// Get elements from DOM
const taskList = document.querySelector('#task-list');

/* Deletes a task from the tasks array */
export function deleteTask(taskId) {
  // Filter tasks that do not match the given taskId
  const filteredTasks = tasks.filter((task) => task.id !== taskId);

  tasks.length = 0;
  tasks.push(...filteredTasks);

  taskList.dispatchEvent(new CustomEvent('tasksUpdated'));
}
