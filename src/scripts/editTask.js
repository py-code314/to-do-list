import { tasks } from "./formData";
import { generateForm } from './formUtils';

// Show Edit Form with prefilled values
export function editTask(id) {
  console.log(id);
  // Get Current Task by matching id
  let currentTask = tasks.filter(task => task.id === id)
  console.log(currentTask);
  currentTask = currentTask[0]
  // console.log(currentTask.title);

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

  // Create hidden input field to store task id
  const idInput = Object.assign(document.createElement('input'), {
    type: 'hidden',
    name: 'id',
    value: id,
  });

  // Add Id Input to Task Form
  taskForm.appendChild(idInput)

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


