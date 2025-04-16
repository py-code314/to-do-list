import { tasks } from './new-task';

const taskList = document.querySelector('#task-list');

// Add all Tasks to Local storage
export function addToLocalStorage() {
  const taskTitles = tasks.map((task) => task.title);

  const defaultTaskTitles = [
    'get milk',
    'try a new recipe',
    'go to gym',
    'make a study playlist',
    'meditate for 5 min',
  ];
  let tasksToStore = [];

  if (
    defaultTaskTitles.every((defaultTitle) => taskTitles.includes(defaultTitle))
  ) {
    tasksToStore = tasks.slice(5);
  } else {
    tasksToStore = tasks;
  }
  localStorage.setItem('tasks', JSON.stringify(tasksToStore));
}
taskList.addEventListener('tasksUpdated', addToLocalStorage);

// Retrieve all Tasks from Local storage
export function restoreFromLocalStorage() {
  /* Check for the presence of Tasks object in Local Storage 
  to avoid localStorage = null error */
  const storedTaskData = localStorage.getItem('tasks');
  if (storedTaskData) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));

    if (storedTasks.length) {
      // Push multiple tasks using spread operator
      tasks.push(...storedTasks);

      taskList.dispatchEvent(new CustomEvent('tasksUpdated'));
    }
  }
}
