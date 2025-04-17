// Import data and functions

import { generateForm } from './form-utils';
import { categories, createNewProject } from './project-handler';
// import { saveProjectsToLocalStorage } from './storage-utils';
import { createContainer, createImage, createButton } from './dom-utils';

// Import Images
import boxIcon from '../assets/images/icon-box.svg';
import removeIcon from '../assets/images/icon-remove.svg';

// Get html elements
const projects = document.querySelector('#projects');
// const taskList = document.querySelector('#task-list');
const newProjectButton = document.querySelector('#new-project-button');

// Initialize categories
// export let categories = [{ id: 'Inbox', value: 'Inbox', text: 'Inbox' }];

/* Generates a form for creating a new project */
export function showNewProjectForm() {
  const { modal, form, submitButton, closeButton } = generateForm({
    labelValue: 'New Project',
  });

  return { modal, form, submitButton, closeButton };
}

/* Displays all projects in the projects container */
function displayProject() {
  projects.textContent = '';

  for (const category of categories.slice(1)) {
    const project = createContainer(projects, 'div', '', 'project');

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

    const projectList = createContainer(
      project,
      'ul',
      category.id,
      'project__list'
    );
  }
}

// Event Listeners
newProjectButton.addEventListener('click', () => {
  // Show form
  const { modal, form, closeButton } = showNewProjectForm();

  // Close form
  closeButton.addEventListener('click', () => modal.close());

  // Submit form
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    modal.close();
    // Create new project
    createNewProject(form);
  });
});

projects.addEventListener('projectsUpdated', () => displayProject());

// Initial render
displayProject();
