// Import data and functions
import { categories } from './project-handler';
import { createContainer, createImage, createButton } from './dom-utils';

// Import Images
import boxIcon from '../assets/images/icon-box.svg';
import removeIcon from '../assets/images/icon-remove.svg';

// Get html elements
const projects = document.querySelector('#projects');

/* Displays all projects in the projects container */
function displayProject() {
  projects.textContent = '';

  for (const category of categories.slice(1)) {
    // Create project
    const project = createContainer(projects, 'div', '', 'project');

    // Create project title and remove button
    const titleButtonContainer = createContainer(
      project,
      'div',
      '',
      'project__container'
    );

    const projectTitle = createContainer(
      titleButtonContainer,
      'div',
      '',
      'project__title'
    );

    const projectIcon = createImage(
      projectTitle,
      'project__image',
      boxIcon,
      '',
      25,
      25,
      ''
    );

    const projectName = document.createElement('h2');
    projectName.className = 'project__name';
    projectName.textContent = category.text;

    projectTitle.append(projectIcon, projectName);

    const removeButton = createButton(
      titleButtonContainer,
      'removeButton',
      'button button--delete',
      'button',
      category.id,
      ''
    );
    removeButton.ariaLabel = `Delete ${category.text}`;

    const removeImage = createImage(
      removeButton,
      'project__image',
      removeIcon,
      '',
      22,
      22,
      'Delete'
    );

    // Create container for tasks
    const projectList = createContainer(
      project,
      'ul',
      category.id,
      'project__list'
    );
  }
}

projects.addEventListener('projectsUpdated', () => displayProject());

// Initial render
displayProject();
