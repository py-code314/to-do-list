import { tasks } from "./formData";
import { generateForm } from './formUtils';

export function editTask(id) {
  console.log(id);
  let currentTask = tasks.filter(task => task.id === id)
  console.log(currentTask);
  currentTask = currentTask[0]
  console.log(currentTask.title);

  const {
    modal,
    taskForm,
    titleInput,
    dueDateInput,
    titleError,
    dueDateError,
    cancelButton,
  } = generateForm({
    formHeading: 'Edit Task',
    titleValue: currentTask.title,
    descriptionValue: currentTask.description,
    dueDateValue: currentTask.dueDate,
    priorityValue: currentTask.priority,
    statusValue: currentTask.status,
    categoryValue: currentTask.category,
    notesValue: currentTask.notes,
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

/* Show Form when user clicks Edit Task button */
