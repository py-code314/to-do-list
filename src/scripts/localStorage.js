// import { tasks } from './formData';
import { tasks } from './newTask';

const taskList = document.querySelector('#task-list');

// Add all Tasks to Local storage
export function addToLocalStorage() {
  // const tasksToStore = [...tasks].slice(1)
  
  // const tasksToStore = tasks.slice(1);
  // console.log(tasksToStore);
  // localStorage.setItem('tasks', JSON.stringify(tasksToStore))
  // localStorage.setItem('tasks', JSON.stringify(tasks))
  const taskTitles = tasks.map(task => task.title)
  console.log(taskTitles)
  const defaultTaskTitles = [
    'get milk',
    'try a new recipe',
    'go to gym',
    'make a study playlist',
    'meditate for 5 min',
  ];
  let tasksToStore = []
  // if (taskTitles.includes('get milk')) {
  //   tasksToStore = tasks.slice(1);
  // } else {
  //   tasksToStore = tasks;
  // }
  if (defaultTaskTitles.every(defaultTitle => taskTitles.includes(defaultTitle))) {
    tasksToStore = tasks.slice(2);
  } else {
    tasksToStore = tasks;
  }
  localStorage.setItem('tasks', JSON.stringify(tasksToStore));
}
taskList.addEventListener('tasksUpdated', addToLocalStorage);
// addToLocalStorage()

// Retrieve all Tasks from Local storage
export function restoreFromLocalStorage() {
  /* Check for the presence of Tasks object in Local Storage 
  to avoid localStorage = null error */
  const storedTaskData = localStorage.getItem('tasks')
  if (storedTaskData) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));

   
    if (storedTasks.length) {
      // Push multiple tasks using spread operator
      tasks.push(...storedTasks);
      
      taskList.dispatchEvent(new CustomEvent('tasksUpdated'));
    }
  }
}


