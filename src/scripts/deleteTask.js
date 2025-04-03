import { tasks } from './formData';

const taskList = document.querySelector('#task-list');
export function deleteTask(id) {
  
  const filteredTasks = tasks.filter(task => task.id !== id)
  // Imported 'tasks' is getter only so reassigning it to a new value doesn't work
  // Mutate the array inline instead of reassigning
  tasks.splice(0, tasks.length, ...filteredTasks)
  
  taskList.dispatchEvent(new CustomEvent('itemsUpdated'));
}
