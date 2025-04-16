// Import data
import { tasks } from './new-task';
// Get elements from DOM
const taskList = document.querySelector('#task-list');

/* Update the status of a task */
function updateTaskStatus(id) {
  let checkedTask = tasks.find((task) => task.id === id);
  checkedTask.status =
    checkedTask.status === 'incomplete' ? 'complete' : 'incomplete';

  taskList.dispatchEvent(new CustomEvent('tasksUpdated'));
}

// Event listener for click on checkbox
taskList.addEventListener('click', (event) => {
  const checkbox = event.target;
  if (checkbox.classList.contains('task__input')) {
    updateTaskStatus(parseInt(checkbox.value));
  }
});
