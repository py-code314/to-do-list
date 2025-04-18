// Import data and functions
import { currentView } from './filter-buttons';
import {
  displayTodayTasks,
  displayTomorrowTasks,
  displayNextSevenDaysTasks,
  displayInboxTasks,
  displayCompletedTasks,
  displayAllTasks,
} from './filter-tasks';

// Get elements from DOM
const todayButton = document.querySelector('#today');
const tomorrowButton = document.querySelector('#tomorrow');
const nextSevenDaysButton = document.querySelector('#next-7-days');
const inboxButton = document.querySelector('#inbox');
const completedButton = document.querySelector('#completed');
const allTasksButton = document.querySelector('#all-tasks');
const searchButton = document.querySelector('#search');
const addTaskButton = document.querySelector('#addTask');
const taskList = document.querySelector('#task-list');

/* Reload tasks based on current view */
taskList.addEventListener('tasksUpdated', () => {
  switch (currentView) {
    case 'today':
      todayButton.style.backgroundColor = 'var(--clr-blue-munsell)';
      displayTodayTasks();
      break;
    case 'tomorrow':
      tomorrowButton.style.backgroundColor = 'var(--clr-blue-munsell)';
      displayTomorrowTasks();
      break;
    case 'next-7-days':
      nextSevenDaysButton.style.backgroundColor = 'var(--clr-blue-munsell)';
      displayNextSevenDaysTasks();
      break;
    case 'inbox':
      inboxButton.style.backgroundColor = 'var(--clr-blue-munsell)';
      displayInboxTasks();
      break;
    case 'completed':
      completedButton.style.backgroundColor = 'var(--clr-blue-munsell)';
      displayCompletedTasks();
      break;
    case 'all-tasks':
      allTasksButton.style.backgroundColor = 'var(--clr-blue-munsell)';
      displayAllTasks();
      break;
    default:
      // Fallback
      searchButton.style.backgroundColor = 'var(--clr-tea-green)';
      addTaskButton.style.backgroundColor = 'var(--clr-tea-green)';
      todayButton.style.backgroundColor = 'var(--clr-blue-munsell)';
      displayTodayTasks();
  }
});
