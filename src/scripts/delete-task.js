import { tasks } from './new-task';

const taskList = document.querySelector('#task-list');
export function deleteTask(id) {
  console.log(tasks);

  const filteredTasks = tasks.filter((task) => task.id !== id);
  // Imported 'tasks' is getter only so reassigning it to a new value doesn't work
  // Mutate the array inline instead of reassigning
  tasks.splice(0, tasks.length, ...filteredTasks);
  console.log(tasks);
  taskList.dispatchEvent(new CustomEvent('tasksUpdated'));
}
