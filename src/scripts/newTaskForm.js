/* Show Form when user clicks Add Task button */

import { generateForm } from "./formUtils";

const content = document.querySelector('#content');

export function showNewTaskForm() {
  /* Dialog modal */
  const modal = Object.assign(document.createElement('dialog'), {
    className: 'modal',
  });

  const {
    // modal,
    taskForm,
    titleInput,
    dueDateInput,
    titleError,
    dueDateError,
    cancelButton,
  } = generateForm({
    formHeading: 'New Task',
    titleValue: '',
    descriptionValue: '',
    dueDateValue: '',
    priorityValue: 'medium',
    statusValue: 'incomplete',
    categoryValue: 'inbox',
    notesValue: '',
  });

  // Add Form, Modal to parent elements
  modal.appendChild(taskForm);
  content.appendChild(modal);

  // Show Modal
  modal.showModal();

  return {
    modal,
    taskForm,
    titleInput,
    dueDateInput,
    titleError,
    dueDateError,
    cancelButton,
  };
}

