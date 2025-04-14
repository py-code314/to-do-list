// import { tasks } from './formData';
import { tasks } from './newTask';
// import {tasks} from './newTask'
import { displayTask } from './displayTask';
import {displaySearchResults} from './search'
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

// Filtered tasks screen stays the same after editing a task


function displayTodayTasks() {
  // Format today's date
  const today = format(new Date(), 'yyyy-MM-dd');

  // Filter tasks based on today
  const todayTasks = tasks.filter(
    (task) =>
      compareAsc(new Date(task.dueDate), new Date(today)) === 0 ||
      compareAsc(new Date(task.dueDate), new Date(today)) < 0
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
    (task) => task.dueDate >= today && task.dueDate <= oneWeek
  );

  displayTask(next7DaysTasks);
}

export function displayInboxTasks() {
  // Filter tasks with category Inbox
  const tasksInbox = tasks.filter((task) => task.category === 'Inbox' && task.status === 'incomplete');

  displayTask(tasksInbox);
}

function displayCompletedTasks() {
  // Filter tasks with category Inbox
  const tasksCompleted = tasks.filter((task) =>  task.status === 'complete');

  displayTask(tasksCompleted);
}


function displayAllTasks() {
  displayTask(tasks);
}


const actionButtons = document.querySelectorAll('.button--action');
// console.log(actionButtons);

action.addEventListener('click', (event) => {
  actionButtons.forEach(button => button.style.backgroundColor = 'var(--clr-light-grey)')
  let buttonId = event.target.id
  let button = event.target.style;
  if (buttonId === 'today') {
    // console.log(button, color);
    button.backgroundColor = 'var(--clr-grey)';
    displayTodayTasks();
    // Filtered tasks screen stays the same after editing a task
    taskList.addEventListener('tasksUpdated', displayTodayTasks);
  } else if (buttonId === 'tomorrow') {
    button.backgroundColor = 'var(--clr-grey)'
    displayTomorrowTasks();
    taskList.addEventListener('tasksUpdated', displayTomorrowTasks);
  } else if (buttonId === 'next-7-days') {
    button.backgroundColor = 'var(--clr-grey)'
    displayNext7DaysTasks();
    taskList.addEventListener('tasksUpdated', displayNext7DaysTasks);
  } else if (buttonId === 'inbox') {
    button.backgroundColor = 'var(--clr-grey)'
    displayInboxTasks();
    taskList.addEventListener('tasksUpdated', displayInboxTasks);
  } else if (buttonId === 'completed') {
    button.backgroundColor = 'var(--clr-grey)'
    displayCompletedTasks();
    taskList.addEventListener('tasksUpdated', displayCompletedTasks);
  } else if (buttonId === 'all-tasks') {
    button.backgroundColor = 'var(--clr-grey)';
    displayAllTasks();
    // Filtered tasks screen stays the same after editing a task
    taskList.addEventListener('tasksUpdated', displayAllTasks);
  } 
});


// displayInboxTasks()