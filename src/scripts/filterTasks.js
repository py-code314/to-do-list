import { tasks } from './formData';
import { displayTask } from './task';
const {
  format,
  compareAsc,
  isTomorrow,
  parseISO,
  addDays,
} = require('date-fns');

// Container which has all the action buttons
const action = document.querySelector('.action');

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

function displayInboxTasks() {
  // Filter tasks with category Inbox
  const tasksInbox = tasks.filter((task) => task.category === 'inbox');

  displayTask(tasksInbox);
}

function displayAllTasks() {
  displayTask(tasks);
}

action.addEventListener('click', (event) => {
  if (event.target.id === 'today') {
    displayTodayTasks();
  } else if (event.target.id === 'tomorrow') {
    displayTomorrowTasks();
  } else if (event.target.id === 'next-7-days') {
    displayNext7DaysTasks();
  } else if (event.target.id === 'inbox') {
    displayInboxTasks();
  } else if (event.target.id === 'all-tasks') {
    displayAllTasks();
  }
});
