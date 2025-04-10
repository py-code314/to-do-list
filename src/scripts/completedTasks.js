import { tasks } from "./formData";
const taskList = document.querySelector('#task-list');

taskList.addEventListener('click', (event) => {
  console.log(event)
  const checkbox = event.target
  if (checkbox.classList.contains('task__input')) {
    console.log('checkbox clicked');
    markAsComplete(parseInt(checkbox.value))
  }
})

function markAsComplete(id) {
  let checkedTask = tasks.find(task => task.id === id)
  // checkedTask = checkedTask[0];
  console.log(checkedTask.status);
  checkedTask.status = checkedTask.status === 'incomplete' ? 'complete' : 'incomplete'

  taskList.dispatchEvent(new CustomEvent('tasksUpdated'))
}