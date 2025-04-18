// Get html elements
const projects = document.querySelector('#projects');
const taskList = document.querySelector('#task-list');

// Initialize categories
export let categories = [{ id: 'Inbox', value: 'Inbox', text: 'Inbox' }];

/* Creates a new project from a form and appends it to the projects array */
export function createNewProject(form) {
  // Create new formData object
  const formData = new FormData(form);

  // Convert formData to JS object
  const taskData = Object.fromEntries(formData);

  // Create Category object
  const newCategory = {
    id: taskData.title,
    value: taskData.title,
    text: taskData.title,
  };

  categories.push(newCategory);

  // Fire Custom Events
  projects.dispatchEvent(new CustomEvent('projectsUpdated'));
  taskList.dispatchEvent(new CustomEvent('tasksUpdated'));
}



/* Deletes a project from the categories array */
function deleteProject(projectId) {
  categories = categories.filter((category) => category.id !== projectId);

  projects.dispatchEvent(new CustomEvent('projectsUpdated'));
  taskList.dispatchEvent(new CustomEvent('tasksUpdated'));
}

/* Event listener to remove project */
projects.addEventListener('click', (event) => {
  const button = event.target.parentNode;
  if (button.id === 'removeButton') {
    deleteProject(button.value);
  }
});
