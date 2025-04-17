// Import data and functions
import { tasks } from './new-task';
import { createContainer, createInput, createLabel } from './dom-utils';

// Get HTML elements
const taskList = document.querySelector('#task-list');
const projects = document.querySelector('#projects');

export function addTaskToProject() {
  // Clear project lists
  const projectLists = projects.querySelectorAll('.project__list');
  projectLists.forEach((list) => {
    list.textContent = '';
  });

  // Filter incomplete tasks
  const incompleteTasks = tasks.filter((task) => task.status === 'incomplete');

  // Add incomplete task to a project list
  incompleteTasks.forEach((task) => {

    const projectList = projects.querySelector(`#${task.category}`);
    if (projectList) {
      // Create task container
      const taskContainer = createContainer(
        projectList,
        'div',
        '',
        'task__div'
      );

      // Create checkbox
      const checkbox = createInput(
        taskContainer,
        `item-${task.id}`,
        'task__input',
        'checkbox',
        'status',
        task.id
      );
      checkbox.checked = task.status === 'complete';

      // Create task title
      const label = createLabel(
        taskContainer,
        'task__title',
        `item-${task.id}`,
        task.title
      );

      const divider = document.createElement('hr');

      projectList.appendChild(divider);
    }
  });
}

taskList.addEventListener('tasksUpdated', addTaskToProject);
projects.addEventListener('projectsUpdated', addTaskToProject);
