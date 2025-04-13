// import { tasks } from "./formData";
import { tasks } from './newTask';
const taskList = document.querySelector('#task-list');

taskList.addEventListener('click', (event) => {
  const checkbox = event.target
  if (checkbox.classList.contains('task__input')) {
    markAsComplete(parseInt(checkbox.value))
  }
})

function markAsComplete(id) {
  let checkedTask = tasks.find(task => task.id === id)
  checkedTask.status = checkedTask.status === 'incomplete' ? 'complete' : 'incomplete'

  taskList.dispatchEvent(new CustomEvent('tasksUpdated'))
}