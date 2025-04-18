// Import data and functions
import { tasks } from './new-task';
import { generateForm } from './form-utils';
import { displayTask } from './task-display';

// Get HTML elements
const action = document.querySelector('.action');

/* Displays a search form  */
function showSearchForm() {
  const { modal, form, closeButton } = generateForm({ labelValue: 'Search' });
  return { modal, form, closeButton };
}

/* Displays tasks in the task list that match the given input value */
export function displaySearchResults(inputValue) {
  const searchResults = tasks.filter(
    (task) => task.title.toLowerCase() === inputValue.toLowerCase()
  );
  displayTask(searchResults);
}

/* Event listeners for search button and form*/
action.addEventListener('click', (event) => {
  // Show search form
  if (event.target.id === 'search') {
    const { modal, form, closeButton } = showSearchForm();

    // Close form
    closeButton.addEventListener('click', () => {
      modal.close();
    });

    // Submit form
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      modal.close();
      // Create new formData object
      const formData = new FormData(form);

      // Convert formData to JS object
      let input = Object.fromEntries(formData);
      input = input.title.toLowerCase();

      displaySearchResults(input);
    });
  }
});

