// Import date functions
const { format } = require('date-fns');
// Initialize tasks
export let tasks = [];

/* Task constructor */
export class NewTask {
  constructor({
    title,
    description,
    dueDate,
    priority,
    status,
    category,
    notes,
    id,
  }) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
    this.category = category;
    this.notes = notes;
    this.id = parseInt(id) || Date.now();
  }
}

/* Add tasks to tasks array */
const task1 = new NewTask({
  title: 'get milk',
  description: 'get whole milk',
  dueDate: format(new Date(), 'yyyy-MM-dd'),
  priority: 'medium',
  status: 'incomplete',
  category: 'Inbox',
  notes: 'check the date before buying',
  id: 1,
});

tasks.push(task1);

const task2 = new NewTask({
  title: 'try a new recipe',
  description: 'new chicken recipe',
  dueDate: '2025-04-18',
  priority: 'low',
  status: 'incomplete',
  category: 'Inbox',
  notes: 'have all ingredients to cook',
  id: 2,
});

tasks.push(task2);

const task3 = new NewTask({
  title: 'go to gym',
  description: '',
  dueDate: '2025-04-19',
  priority: 'high',
  status: 'incomplete',
  category: 'Inbox',
  notes: 'lift weights',
  id: 3,
});

tasks.push(task3);

const task4 = new NewTask({
  title: 'make a study playlist',
  description: 'Spotify playlist',
  dueDate: '2025-04-14',
  priority: 'medium',
  status: 'complete',
  category: 'Inbox',
  notes:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  id: 4,
});

tasks.push(task4);

const task5 = new NewTask({
  title: 'meditate for 5 min',
  description: '',
  dueDate: '2025-04-14',
  priority: 'medium',
  status: 'incomplete',
  category: 'Inbox',
  notes: 'use Headspace app',
  id: 5,
});

tasks.push(task5);
