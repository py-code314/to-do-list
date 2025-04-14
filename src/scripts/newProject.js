// Import Images
import boxIcon from '../assets/images/icon-box.svg';
import removeIcon from '../assets/images/icon-remove.svg';
import { tasks } from './formData';
import { generateForm } from './formUtils';
// import {addTaskToProject} from './project-task-handler'

const projects = document.querySelector('#projects');
const taskList = document.querySelector('#task-list');

export let categories = [{ id: 'Inbox', value: 'Inbox', text: 'Inbox' }];

export function showNewProjectForm() {
  const { modal, form, submitButton, closeButton } = generateForm({
    labelValue: 'Project',
  });

  return { modal, form, submitButton, closeButton };
}

const newProjectButton = document.querySelector('#new-project-button');

newProjectButton.addEventListener('click', () => {
  const { modal, form, closeButton } = showNewProjectForm();

  closeButton.addEventListener('click', () => {
    // modal.close();
    modal.remove();
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    modal.close();

    createNewProject(form);
  });
});

function createNewProject(form) {
  // Create new formData object
  const formData = new FormData(form);

  // Convert formData to JS object
  const taskData = Object.fromEntries(formData);

  // Create Category object
  const category = {
    id: taskData.title,
    value: taskData.title,
    text: taskData.title,
  };

  categories.push(category);

  // Fire Custom Event
  projects.dispatchEvent(new CustomEvent('projectsUpdated'));
  taskList.dispatchEvent(new CustomEvent('tasksUpdated'));
}

projects.addEventListener('projectsUpdated', displayProjects);

function displayProjects() {
  projects.textContent = '';

  const categoriesToDisplay = [...categories].slice(1);

  for (const category of categoriesToDisplay) {
    // Create Project Div
    const projectDiv = Object.assign(document.createElement('div'), {
      // id: category.id,
      className: 'project',
    });

    // Create container for title div and remove button
    const titleButtonDiv = Object.assign(document.createElement('div'), {
      className: 'project__container',
    });

    // Create Project Title Div
    const projectTitleDiv = Object.assign(document.createElement('div'), {
      className: 'project__title',
    });

    // Create Img element
    const projectIcon = Object.assign(document.createElement('img'), {
      className: 'project__image',
      src: `${boxIcon}`,
      alt: '',
      width: '25',
      height: '25',
    });

    // Create Project Title
    const projectTitle = Object.assign(document.createElement('h2'), {
      className: 'project__name',
      textContent: category.text,
    });

    // Add Image and Title to Project Title div
    projectTitleDiv.append(projectIcon, projectTitle);

    // Create delete button
    const removeButton = Object.assign(document.createElement('button'), {
      id: 'removeButton',
      className: 'button button--delete',
      ariaLabel: `Delete ${category.text}`,
      value: category.id,
    });

    // Create delete Image
    const removeImage = Object.assign(document.createElement('img'), {
      className: 'project__image',
      src: `${removeIcon}`,
      alt: '',
      width: '22',
      height: '22',
      title: 'Delete',
    });

    // Add delete image to delete button
    removeButton.appendChild(removeImage);

    // Add title div and delete button to titleButton div
    titleButtonDiv.append(projectTitleDiv, removeButton);

    // Add titleButton div to projectDiv
    projectDiv.appendChild(titleButtonDiv);

    // Create Project List Div
    const projectList = Object.assign(document.createElement('ul'), {
      id: category.id,
      className: 'project__list',
    });

    // Add Project Title Div and Project List  to Project Div
    projectDiv.append(titleButtonDiv, projectList);

    // Add Project Div to Projects
    projects.appendChild(projectDiv);
  }
}

projects.addEventListener('projectsUpdated', addProjectsToLocalStorage);
// taskList.dispatchEvent(new CustomEvent('tasksUpdated'))
// taskList.addEventListener('tasksUpdated', addTaskToProject);

// Add all Projects to Local storage
export function addProjectsToLocalStorage() {
  const categoriesToStore = [...categories].slice(1);

  localStorage.setItem('categories', JSON.stringify(categoriesToStore));
}

// Retrieve all Projects from Local storage
export function restoreProjectsFromLocalStorage() {
  /* Check for the presence of Projects object in Local Storage 
  to avoid localStorage = null error */
  const storedCategoriesData = localStorage.getItem('categories');

  if (storedCategoriesData) {
    const storedCategories = JSON.parse(localStorage.getItem('categories'));

    if (storedCategories.length) {
      categories.push(...storedCategories);

      projects.dispatchEvent(new CustomEvent('projectsUpdated'));
    }
  }
}

restoreProjectsFromLocalStorage();

projects.addEventListener('click', (event) => {
  if (event.target.parentNode.id === 'removeButton') {
    deleteProject(event.target.parentNode.value);
  }
});

function deleteProject(id) {
  const filteredCategories = categories.filter(
    (category) => category.id !== id
  );

  categories = filteredCategories;

  projects.dispatchEvent(new CustomEvent('projectsUpdated'));
  taskList.dispatchEvent(new CustomEvent('tasksUpdated'));
}
