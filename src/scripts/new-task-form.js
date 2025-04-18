// Import functions
import { generateTaskForm } from './form-utils';

/* Displays a form for creating a new task */
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
