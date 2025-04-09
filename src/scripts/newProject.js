// Import Images
import boxIcon from '../assets/images/icon-box.svg';
import removeIcon from '../assets/images/icon-remove.svg';
import { tasks } from './formData';

const newProjectDiv = document.querySelector('.new-project');

const projects = document.querySelector('#projects');

export let categories = [{ id: 'inbox', value: 'inbox', text: 'Inbox' }];

export function showNewProjectForm() {
  /* Create Form */
  const projectForm = Object.assign(document.createElement('form'), {
    className: 'form new-project__form',
    method: 'dialog',
  });

  /* Create Title field */
  const titleField = Object.assign(document.createElement('div'), {
    className: 'form__control new-project__form-control',
  });

  // Create Title Input
  const titleInput = Object.assign(document.createElement('input'), {
    id: 'title',
    className: 'form__input new-project__form-input',
    type: 'text',
    name: 'title',
    required: true,
    autofocus: true,
  });

  // Create Submit button
  const submitButton = Object.assign(document.createElement('button'), {
    id: 'submit',
    className: 'button button--submit',
    type: 'submit',
    value: 'submit',
    textContent: 'Add',
  });

  // Add Input, Submit button to Title field
  titleField.append(titleInput, submitButton);

  // Add Title Field to Project Form
  projectForm.appendChild(titleField);

  // Add Project Form to New Project Div
  newProjectDiv.appendChild(projectForm);

  return { projectForm, submitButton };
}

const newProjectButton = document.querySelector('#new-project-button');

newProjectButton.addEventListener('click', () => {
  const { projectForm } = showNewProjectForm();

  projectForm.addEventListener('submit', (event) => {
    event.preventDefault();

    projectForm.style.display = 'none';
    createNewProject(projectForm);
  });
});

function createNewProject(form) {
  // Create new formData object
  const formData = new FormData(form);

  // Convert formData to JS object
  const taskData = Object.fromEntries(formData);

  // Capitalize title
  let title = taskData.title;
  title = title.charAt(0).toUpperCase() + title.slice(1);

  // Create Category object
  const category = {
    id: taskData.title.toLowerCase(),
    value: taskData.title.toLowerCase(),
    text: title,
  };

  categories.push(category);

  // Fire Custom Event
  projects.dispatchEvent(new CustomEvent('projectsUpdated'));
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

    // Add delete button titleButton div


    // Add title div and delete button to titleButton div
    titleButtonDiv.append(projectTitleDiv, removeButton)

    // Add titleButton div to projectDiv
    projectDiv.appendChild(titleButtonDiv)


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
      // projects.dispatchEvent(new CustomEvent('tasksUpdated'));

      projects.dispatchEvent(new CustomEvent('projectsUpdated'));
    }
  }
}

restoreProjectsFromLocalStorage();


projects.addEventListener('click', (event) => {
  if (event.target.parentNode.id === 'removeButton') {
    console.log('remove button clicked');
    
  }
})