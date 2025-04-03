import { NewTask } from './newTodo';
// import { displayTasks } from './displayTasks';

const taskList = document.querySelector('#task-list');
// console.log(content);


export let tasks = [
  // {
  //   title: 'buy milk',
  //   description:
  //     'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  //   dueDate: '2025-04-02',
  //   priority: 'medium',
  //   status: 'incomplete',
  //   category: 'inbox',
  //   notes: '',
  //   id: '123'
  // },
  // {
  //   title: 'laundry',
  //   description: '',
  //   dueDate: '2025-04-05',
  //   priority: 'low',
  //   status: 'incomplete',
  //   category: 'inbox',
  //   notes:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   id: '345'
  // },
  // {
  //   title: 'pay bills',
  //   description: '',
  //   dueDate: '2025-04-05',
  //   priority: 'high',
  //   status: 'incomplete',
  //   category: 'inbox',
  //   notes: '',
  //   id: '567'
  // },
  
];

export function createNewTask(form) {
  // Create new formData object
  const formData = new FormData(form);

  // Convert formData to JS object
  const taskData = Object.fromEntries(formData);
  console.log(taskData);

  // Create new task
  const task = new NewTask(taskData);
  console.log(task);

  // Add Task  to tasks array
  tasks.push(task);
  console.log(tasks);
  // displayTasks()
  taskList.dispatchEvent(new CustomEvent('itemsUpdated'))
}
console.log(tasks);