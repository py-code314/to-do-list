// class to create a new to-do object
// Convert task id to int because Edit Task id is a string
// Default id for New Task is a number

// import { tasks } from "./formData"
// import { displayTask } from "./displayTask";
// export let tasks = Array.from([]);
export let tasks = [];




const taskList = document.querySelector('#task-list');

export class NewTask {
  constructor({
    title,
    description,
    dueDate,
    priority,
    status,
    category,
    notes,
    // checklist = false,
    // id = Date.now(),
    id
  }) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
    this.category = category;
    this.notes = notes;
    // this.checklist = checklist;
    this.id = parseInt(id) || Date.now();
    // this.id = parseInt(id);
  }
}

// export const task3 = new NewTask({
//   title: 'get milk',
//   description: '',
//   dueDate: '2025-04-12',
//   priority: 'high',
//   status: 'incomplete',
//   category: 'Inbox',
//   notes: 'check the date before buying',
// });

// tasks.push(task3);
// console.log(tasks);

// // Fire Custom Event after tasks updated
// taskList.dispatchEvent(new CustomEvent('tasksUpdated'));
// console.log('Dispatching tasksUpdated event...');
// taskList.dispatchEvent(new CustomEvent('tasksUpdated'));
// console.log('Event dispatched.');



