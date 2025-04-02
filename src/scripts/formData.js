import { NewTask } from './newTodo';

export const tasks = [
  {
    title: 'buy milk',
    description: 'sdksd sdkskd s weiwe xcxcxc ksdsk weiw fjfjj',
    dueDate: '2025-04-02',
    priority: 'medium',
    status: 'incomplete',
    category: 'inbox',
    notes: '',
  },
  {
    title: 'laundry',
    description: '',
    dueDate: '2025-04-05',
    priority: 'low',
    status: 'incomplete',
    category: 'inbox',
    notes: '',
  },
  {
    title: 'pay bills',
    description: '',
    dueDate: '2025-04-05',
    priority: 'high',
    status: 'incomplete',
    category: 'inbox',
    notes: '',
  },
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
  
}
console.log(tasks);