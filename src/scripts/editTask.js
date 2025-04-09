import { tasks } from './formData';
import { generateTaskForm } from './formUtils';

// Show Edit Form with prefilled values
export function displayEditTaskForm(id) {
  // Get current task by matching id
  let currentTask = tasks.filter((task) => task.id === id);
  currentTask = currentTask[0];

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

  // Create hidden input field to store task id
  const idInput = Object.assign(document.createElement('input'), {
    type: 'hidden',
    name: 'id',
    value: id,
  });

  // Add idInput to taskForm
  taskForm.appendChild(idInput);

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
