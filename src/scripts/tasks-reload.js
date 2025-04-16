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
const taskList = document.querySelector('#task-list');

taskList.addEventListener('tasksUpdated', () => {
  // Update the correct view based on currentView
  switch (currentView) {
    case 'today':
      todayButton.style.backgroundColor = 'var(--clr-grey)';
      displayTodayTasks();
      break;
    case 'tomorrow':
      tomorrowButton.style.backgroundColor = 'var(--clr-grey)';
      displayTomorrowTasks();
      break;
    case 'next-7-days':
      nextSevenDaysButton.style.backgroundColor = 'var(--clr-grey)';
      displayNextSevenDaysTasks();
      break;
    case 'inbox':
      inboxButton.style.backgroundColor = 'var(--clr-grey)';
      displayInboxTasks();
      break;
    case 'completed':
      completedButton.style.backgroundColor = 'var(--clr-grey)';
      displayCompletedTasks();
      break;
    case 'all-tasks':
      allTasksButton.style.backgroundColor = 'var(--clr-grey)';
      displayAllTasks();
      break;
    default:
      // Fallback
      todayButton.style.backgroundColor = 'var(--clr-grey)';
      displayTodayTasks();
  }
});
