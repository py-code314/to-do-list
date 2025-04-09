import { tasks } from './formData';

const taskList = document.querySelector('#task-list');

const projects = document.querySelector('#projects');

function addTaskToProject() {
  const projectLists = projects.querySelectorAll('.project__list');
  projectLists.forEach((list) => (list.textContent = ''));
  tasks.forEach((task) => {
    const projectList = projects.querySelector(`#${task.category}`);
    if (projectList) {
      // Create Title container
      const titleDiv = Object.assign(document.createElement('div'), {
        className: 'task__div',
      });

      // Create Check box
      const taskStatus = Object.assign(document.createElement('input'), {
        id: `item-${task.id}`,
        className: 'task__input',
        type: 'checkbox',
        name: 'status',
        checked: task.status === 'completed' ? true : false,
      });

      // Create Title
      const taskTitle = Object.assign(document.createElement('label'), {
        className: 'task__title',
        htmlFor: `item-${task.id}`,
        textContent: task.title,
      });

      // Add Check box and Title to Title Div
      titleDiv.append(taskStatus, taskTitle);

      // Add divider
      const divider = Object.assign(document.createElement('hr'));

      projectList.append(titleDiv, divider);
      // projectList.appendChild(projectItem);
    }
  });
}

taskList.addEventListener('tasksUpdated', addTaskToProject);
