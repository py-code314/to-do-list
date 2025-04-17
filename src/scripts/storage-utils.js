// Import data
import { tasks } from './new-task';
import { categories } from './new-project';

// Get elements from DOM
const taskList = document.querySelector('#task-list');

/* Stores tasks in local storage except default tasks */
export function saveTasksToLocalStorage() {
  const defaultTaskTitles = [
    'get milk',
    'try a new recipe',
    'go to gym',
    'make a study playlist',
    'meditate for 5 min',
  ];
  const storedTaskTitles = tasks.map((task) => task.title);

  // Exclude default tasks
  const tasksToStore = defaultTaskTitles.every((defaultTitle) =>
    storedTaskTitles.includes(defaultTitle)
  )
    ? tasks.slice(5)
    : tasks;

  localStorage.setItem('tasks', JSON.stringify(tasksToStore));
}

/* Retrieves tasks from local storage and adds them to the tasks array */
export function restoreTasksFromLocalStorage() {
  const storedTasksJSON = localStorage.getItem('tasks');

  /* Check for the presence of tasks object in Local Storage 
  to avoid localStorage = null error */
  if (storedTasksJSON) {
    const storedTasks = JSON.parse(storedTasksJSON);

    // Check for the presence of tasks in Local Storage
    if (storedTasks.length) {
      tasks.push(...storedTasks);

      taskList.dispatchEvent(new CustomEvent('tasksUpdated'));
    }
  }
}

/* Stores all Projects in local storage except default projects */
export function saveProjectsToLocalStorage() {
  // Exclude default projects
  const categoriesToStore = categories.slice(1);

  localStorage.setItem('categories', JSON.stringify(categoriesToStore));
}

/* Retrieves projects from local storage and adds them to the categories array */
export function restoreProjectsFromLocalStorage() {
  const storedCategoriesData = localStorage.getItem('categories');
  // Check for the presence of categories object in Local Storage
  if (storedCategoriesData) {
    const storedCategories = JSON.parse(localStorage.getItem('categories'));
    // Check for the presence of categories in Local Storage
    if (storedCategories.length) {
      categories.push(...storedCategories);

      projects.dispatchEvent(new CustomEvent('projectsUpdated'));
    }
  }
}

// Event Listeners 
taskList.addEventListener('tasksUpdated', saveTasksToLocalStorage);
projects.addEventListener('projectsUpdated', saveProjectsToLocalStorage);

// Restore data from Local Storage on page load 
restoreTasksFromLocalStorage();
restoreProjectsFromLocalStorage();
