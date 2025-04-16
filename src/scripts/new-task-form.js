/* Show Form when user clicks Add Task button */

import { generateTaskForm } from './form-utils';

export function displayNewTaskForm() {
  const {
    modal,
    taskForm,
    titleInput,
    dueDateInput,
    titleError,
    dueDateError,
    cancelButton,
  } = generateTaskForm({
    formHeading: 'New Task',
    titleValue: '',
    descriptionValue: '',
    dueDateValue: '',
    priorityValue: 'medium',
    statusValue: 'incomplete',
    categoryValue: 'inbox',
    notesValue: '',
  });

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
