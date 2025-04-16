import { generateForm } from './form-utils';

import { tasks } from './new-task';
import { displayTask } from './display-task';

// Container which has all the action buttons
const action = document.querySelector('.action');

function showSearchForm() {
  const { modal, form, closeButton } = generateForm({ labelValue: 'Search' });
  return { modal, form, closeButton };
}

action.addEventListener('click', (event) => {
  if (event.target.id === 'search') {
    const { modal, form, closeButton } = showSearchForm();

    closeButton.addEventListener('click', () => {
      modal.close();
    });

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
export function displaySearchResults(input) {
  const searchResults = tasks.filter((task) => task.title === input);
  displayTask(searchResults);
}
