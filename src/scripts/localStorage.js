import { tasks } from './formData';

const content = document.querySelector('#content');

// Add all Tasks to Local storage
export function addToLocalStorage() {
  // console.log('saving items to local storage');
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Retrieve all Tasks from Local storage
export function restoreFromLocalStorage() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks"))

  if (storedTasks.length) {
    tasks.push(...storedTasks)
    content.dispatchEvent(new CustomEvent('itemsUpdated'))
  }
}
