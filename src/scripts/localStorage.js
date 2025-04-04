import { tasks } from './formData';

const taskList = document.querySelector('#task-list');

// Add all Tasks to Local storage
export function addToLocalStorage() {
  // console.log('saving items to local storage');
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Retrieve all Tasks from Local storage
export function restoreFromLocalStorage() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks"))

  if (storedTasks.length) {
    // Push multiple tasks using spread operator
    tasks.push(...storedTasks)
    taskList.dispatchEvent(new CustomEvent('itemsUpdated'))
  }
}
