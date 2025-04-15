// import { tasks } from './formData';
import { tasks } from './newTask';

const taskList = document.querySelector('#task-list');
export function deleteTask(id) {
  console.log(tasks);
  // const userAddedTasks = tasks.slice(1)
  // console.log(userAddedTasks);
  // const filteredTasks = userAddedTasks.filter(task => task.id !== id)
  // console.log(filteredTasks);
  const filteredTasks = tasks.filter(task => task.id !== id)
  // Imported 'tasks' is getter only so reassigning it to a new value doesn't work
  // Mutate the array inline instead of reassigning
  tasks.splice(0, tasks.length, ...filteredTasks)
  console.log(tasks);
  taskList.dispatchEvent(new CustomEvent('tasksUpdated'));
}
