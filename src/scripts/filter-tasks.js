import { tasks } from './new-task';

import { displayTask } from './display-task';

const {
  format,
  compareAsc,
  isTomorrow,
  parseISO,
  addDays,
} = require('date-fns');

// Container which has all the action buttons
const action = document.querySelector('.action');
const taskList = document.querySelector('#task-list');

function displayTodayTasks() {
  // Format today's date
  const today = format(new Date(), 'yyyy-MM-dd');

  // Filter tasks based on today
  const todayTasks = tasks.filter(
    (task) =>
      (compareAsc(new Date(task.dueDate), new Date(today)) === 0 ||
        compareAsc(new Date(task.dueDate), new Date(today)) < 0) &&
      task.status !== 'complete'
  );

  displayTask(todayTasks);
}

function displayTomorrowTasks() {
  // Filter tasks based on tomorrow
  const tomorrowTasks = tasks.filter(
    (task) => isTomorrow(parseISO(task.dueDate)) === true
  );
  displayTask(tomorrowTasks);
}

function displayNext7DaysTasks() {
  // Format today's date
  const today = format(new Date(), 'yyyy-MM-dd');

  // Get tomorrow's date
  let oneWeek = addDays(parseISO(today), 7);

  // Format tomorrow
  oneWeek = format(oneWeek, 'yyyy-MM-dd');

  const next7DaysTasks = tasks.filter(
    (task) =>
      task.dueDate >= today &&
      task.dueDate <= oneWeek &&
      task.status !== 'complete'
  );

  displayTask(next7DaysTasks);
}

export function displayInboxTasks() {
  // Filter tasks with category Inbox
  const tasksInbox = tasks.filter(
    (task) => task.category === 'Inbox' && task.status === 'incomplete'
  );

  displayTask(tasksInbox);
}

function displayCompletedTasks() {
  // Filter tasks with category Inbox
  const tasksCompleted = tasks.filter((task) => task.status === 'complete');

  displayTask(tasksCompleted);
}

function displayAllTasks() {
  displayTask(tasks);
}

const actionButtons = document.querySelectorAll('.button--action');

let currentView = 'today';
action.addEventListener('click', (event) => {
  actionButtons.forEach(
    (button) => (button.style.backgroundColor = 'var(--clr-light-grey)')
  );
  let buttonId = event.target.id;
  let button = event.target.style;

  currentView = buttonId;
  if (buttonId === 'today') {
    button.backgroundColor = 'var(--clr-grey)';
    displayTodayTasks();
  } else if (buttonId === 'tomorrow') {
    button.backgroundColor = 'var(--clr-grey)';
    displayTomorrowTasks();
  } else if (buttonId === 'next-7-days') {
    button.backgroundColor = 'var(--clr-grey)';
    displayNext7DaysTasks();
  } else if (buttonId === 'inbox') {
    button.backgroundColor = 'var(--clr-grey)';
    displayInboxTasks();
  } else if (buttonId === 'completed') {
    button.backgroundColor = 'var(--clr-grey)';
    displayCompletedTasks();
  } else if (buttonId === 'all-tasks') {
    button.backgroundColor = 'var(--clr-grey)';
    displayAllTasks();
  }
});

const todayButton = action.querySelector('#today');
const tomorrowButton = action.querySelector('#tomorrow');
const next7DaysButton = action.querySelector('#next-7-days');
const inboxButton = action.querySelector('#inbox');
const completedButton = action.querySelector('#completed');
const allTasksButton = action.querySelector('#all-tasks');

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
      next7DaysButton.style.backgroundColor = 'var(--clr-grey)';
      displayNext7DaysTasks();
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
      // fallback
      todayButton.style.backgroundColor = 'var(--clr-grey)';
      displayTodayTasks();
  }
});
