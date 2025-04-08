import { tasks } from './formData';

const taskList = document.querySelector('#task-list');

const projects = document.querySelector('#projects');

function addTaskToProject() {
  const projectLists = projects.querySelectorAll('.project__list');
  projectLists.forEach((list) => (list.textContent = ''));
  tasks.forEach((task) => {
    const projectList = projects.querySelector(`#${task.category}`);
    if (projectList) {
      // Create task item
      const projectItem = Object.assign(document.createElement('li'), {
        className: 'project__item',
        textContent: task.title,
      });
      projectList.appendChild(projectItem);
    }
  });
}

taskList.addEventListener('tasksUpdated', addTaskToProject);
