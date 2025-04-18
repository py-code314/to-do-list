// Import data and functions
import { generateForm } from './form-utils';
import { createNewProject } from './project-handler';

// Get html elements
const newProjectButton = document.querySelector('#new-project-button');

/* Generates a form for creating a new project */
export function showNewProjectForm() {
  const { modal, form, submitButton, closeButton } = generateForm({
    labelValue: 'New Project',
  });

  return { modal, form, submitButton, closeButton };
}

/* Event Listeners for creating a new project */
newProjectButton.addEventListener('click', () => {
  // Show form
  const { modal, form, closeButton } = showNewProjectForm();

  // Close form
  closeButton.addEventListener('click', () => modal.close());

  // Submit form
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    modal.close();

    createNewProject(form);
  });
});
