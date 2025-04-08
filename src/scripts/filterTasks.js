import { tasks } from './formData';
import { displayTasks } from './displayTasks';
const {
  format,
  compareAsc,
  isTomorrow,
  parseISO,
  addDays,
} = require('date-fns');

// Container which has all the action buttons
const action = document.querySelector('.action');

action.addEventListener('click', (event) => {
  if (event.target.id === 'today') {
    // Format today's date
    const today = format(new Date(), 'yyyy-MM-dd');

    // Filter tasks based on today
    const todayTasks = tasks.filter(
      (task) =>
        compareAsc(new Date(task.dueDate), new Date(today)) === 0 ||
        compareAsc(new Date(task.dueDate), new Date(today)) < 0
    );

    displayTasks(todayTasks);
  } else if (event.target.id === 'tomorrow') {
    // Filter tasks based on tomorrow
    const tomorrowTasks = tasks.filter(
      (task) => isTomorrow(parseISO(task.dueDate)) === true
    );
    displayTasks(tomorrowTasks);
  } else if (event.target.id === 'next-7-days') {
    // Format today's date
    const today = format(new Date(), 'yyyy-MM-dd');

    // Get tomorrow's date
    let tomorrow = addDays(parseISO(today), 1);
    // Format tomorrow
    tomorrow = format(tomorrow, 'yyyy-MM-dd');
    // Filter tasks later than tomorrow
    const laterThanTomorrowTasks = tasks.filter(
      (task) => task.dueDate > tomorrow
    );

    displayTasks(laterThanTomorrowTasks);
  } else if (event.target.id === 'inbox') {
    // Filter tasks with category Inbox
    const tasksInbox = tasks.filter((task) => task.category === 'inbox');

    displayTasks(tasksInbox);
  } else if (event.target.id === 'all-tasks') {
    displayTasks(tasks);
  }
});
