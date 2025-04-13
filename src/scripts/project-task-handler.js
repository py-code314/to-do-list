// import { tasks } from './formData';
import { tasks } from './newTask';

const taskList = document.querySelector('#task-list');
const projects = document.querySelector('#projects');

function addTaskToProject() {
  // Clear all tasks before looping through all the tasks
  const projectLists = projects.querySelectorAll('.project__list');
  projectLists.forEach((list) => (list.textContent = ''));

  // Filter completed tasks
  const incompleteTasks = tasks.filter(task => task.status === 'incomplete')

  // Loop through all incomplete tasks and add the task if task category
  // matches with project name
  incompleteTasks.forEach((task) => {
    const projectList = projects.querySelector(`#${task.category}`);

    // Add checkbox and task title under related project
    if (projectList) {
      // Create Title container
      const titleDiv = Object.assign(document.createElement('div'), {
        className: 'task__div',
      });

      // Create Check box
      const taskCheckbox = Object.assign(document.createElement('input'), {
        id: `item-${task.id}`,
        className: 'task__input',
        type: 'checkbox',
        name: 'status',
        checked: task.status === 'complete' ? true : false,
        value: task.id,
      });

      // Create Title
      const taskTitle = Object.assign(document.createElement('label'), {
        className: 'task__title',
        htmlFor: `item-${task.id}`,
        textContent: task.title,
      });

      // Add Check box and Title to Title Div
      titleDiv.append(taskCheckbox, taskTitle);

      // Add divider
      const divider = Object.assign(document.createElement('hr'));

      projectList.append(titleDiv, divider);
    }
  });
}

function markAsComplete(id) {
  let checkedTask = tasks.find(task => task.id === id)
  checkedTask.status = checkedTask.status === 'incomplete' ? 'complete' : 'incomplete'

  taskList.dispatchEvent(new CustomEvent('tasksUpdated'))
}

taskList.addEventListener('tasksUpdated', addTaskToProject);
projects.addEventListener('click', (event) => {
  console.log(event);
  const checkbox = event.target;
  if (checkbox.classList.contains('task__input')) {
    markAsComplete(parseInt(checkbox.value));
  }
})
