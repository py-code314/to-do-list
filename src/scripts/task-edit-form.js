// Import data and functions
import { tasks } from './new-task';
import { generateTaskForm } from './form-utils';
import { createInput } from './dom-utils';

/* Displays a form for editing a task */
export function displayEditTaskForm(taskId) {
  // Find the current task by matching the id
  const currentTask = tasks.find((task) => task.id === taskId);

  // Populate task form with current task data to edit
  const {
    modal,
    taskForm,
    titleInput,
    dueDateInput,
    titleError,
    dueDateError,
    cancelButton,
  } = generateTaskForm({
    formHeading: 'Edit Task',
    titleValue: currentTask.title,
    descriptionValue: currentTask.description,
    dueDateValue: currentTask.dueDate,
    priorityValue: currentTask.priority,
    statusValue: currentTask.status,
    categoryValue: currentTask.category,
    notesValue: currentTask.notes,
  });

  // Add hidden input to store task id
  createInput(taskForm, '', '', 'hidden', 'id', taskId);

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
