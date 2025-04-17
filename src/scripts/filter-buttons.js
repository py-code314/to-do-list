// Import functions
import {
  displayInboxTasks,
  displayTodayTasks,
  displayTomorrowTasks,
  displayNextSevenDaysTasks,
  displayCompletedTasks,
  displayAllTasks,
} from './filter-tasks';

// Get elements from DOM
const action = document.querySelector('.action');
const actionButtons = document.querySelectorAll('.button--action');

// Initialize current view
export let currentView = 'today';

action.addEventListener('click', (event) => {
  const buttonId = event.target.id;
  const button = event.target.style;

  // Reset background color of all buttons
  actionButtons.forEach((button) => {
    button.style.backgroundColor = 'var(--clr-tea-green)';
  });

  // Update current view
  currentView = buttonId;
  // Update background color of clicked button
  button.backgroundColor = 'var(--clr-blue-munsell)';

  switch (buttonId) {
    case 'today':
      displayTodayTasks();
      break;
    case 'tomorrow':
      displayTomorrowTasks();
      break;
    case 'next-7-days':
      displayNextSevenDaysTasks();
      break;
    case 'inbox':
      displayInboxTasks();
      break;
    case 'completed':
      displayCompletedTasks();
      break;
    case 'all-tasks':
      displayAllTasks();
      break;
  }
});
