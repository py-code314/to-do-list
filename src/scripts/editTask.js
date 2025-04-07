import { tasks } from "./formData";
import { generateForm } from './formUtils';

const editContainer = document.querySelector('.edit');

// Show Edit Form with prefilled values
export function editTask(id) {

  editContainer.textContent = ""
  console.log(id);
  // Get Current Task by matching id
  let currentTask = tasks.filter(task => task.id === id)
  console.log(currentTask);
  currentTask = currentTask[0]
  // console.log(currentTask.title);

  // Add Container for Edit Task Form
  const editTaskDiv
   = Object.assign(document.createElement('div'), {
    className: 'edit__task'
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



  // Add Task Form and Edit Task container to parent elements
  
  editTaskDiv
    .appendChild(taskForm)
  
  editContainer.appendChild(editTaskDiv

  )


  return {
    // modal,
    taskForm,
    titleInput,
    dueDateInput,
    titleError,
    dueDateError,
    cancelButton,
    editTaskDiv

  };
}


