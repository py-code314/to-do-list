// Import data
import { tasks } from './new-task';
import { displayTask } from './task-display';

// Import date functions
const {
  format,
  compareAsc,
  isTomorrow,
  parseISO,
  addDays,
} = require('date-fns');

/* Displays all incomplete tasks with category Inbox */
export function displayInboxTasks() {
  // Filter tasks with category Inbox and incomplete status
  const inboxTasks = tasks.filter(
    (task) => task.category === 'Inbox' && task.status === 'incomplete'
  );

  displayTask(inboxTasks);
}

/* Displays all tasks that are due today and are not completed */
export function displayTodayTasks() {
  // Format today's date
  const today = format(new Date(), 'yyyy-MM-dd');
  // Filter incomplete tasks that are overdue or due today
  const todayTasks = tasks.filter(
    (task) =>
      compareAsc(parseISO(task.dueDate), parseISO(today)) <= 0 &&
      task.status !== 'complete'
  );

  displayTask(todayTasks);
}

/* Displays all tasks that are due tomorrow */
export function displayTomorrowTasks() {
  // Filter tasks due tomorrow
  const tomorrowTasks = tasks.filter(
    (task) => isTomorrow(parseISO(task.dueDate)) === true
  );
  displayTask(tomorrowTasks);
}

/* Displays all tasks that are due in the next seven days and are not completed */
export function displayNextSevenDaysTasks() {
  // Format today's date
  const today = format(new Date(), 'yyyy-MM-dd');
  // Get date 7 days from today
  const sevenDaysLater = format(addDays(parseISO(today), 7), 'yyyy-MM-dd');

  // Filter tasks starting from today to up to 7 days
  const upcomingTasks = tasks.filter(
    (task) =>
      task.dueDate >= today &&
      task.dueDate <= sevenDaysLater &&
      task.status !== 'complete'
  );

  displayTask(upcomingTasks);
}

/* Displays all tasks that have been completed */
export function displayCompletedTasks() {
  // Filter completed tasks
  const completedTasks = tasks.filter((task) => task.status === 'complete');
  displayTask(completedTasks);
}

/* Displays all tasks in the task list */
export function displayAllTasks() {
  displayTask(tasks);
}
