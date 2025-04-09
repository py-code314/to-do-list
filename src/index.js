// import styles
import './styles/styles.css';
// import JS modules
import './scripts/newTodo';
import './scripts/filterTasks'
import './scripts/addToProject';

/* Import functions */
import { showNewTaskForm } from './scripts/newTaskForm';
import {
  validateTitleInput,
  validateDueDateInput,
  validateForm,
} from './scripts/formValidation';
import { createNewTask } from './scripts/formData';
import { displayTask } from './scripts/task';
import { addToLocalStorage } from './scripts/localStorage';
import { restoreFromLocalStorage } from './scripts/localStorage';
import { deleteTask } from './scripts/deleteTask';
import { editTask } from './scripts/editTask';
import { showNewProjectForm } from './scripts/newProject';

import { tasks } from './scripts/formData';


const taskList = document.querySelector('#task-list');

// Event listener for Add Task button
const addTaskButton = document.querySelector('#addTask');
addTaskButton.addEventListener('click', () => {
  const {
    modal,
    taskForm,
    titleInput,
    dueDateInput,
    titleError,
    dueDateError,
    cancelButton,
  } = showNewTaskForm();

  cancelButton.addEventListener('click', () => {
    // closeModal(modal)
    modal.close();
  });

  titleInput.addEventListener('input', () => {
    validateTitleInput(titleInput, titleError);
  });
  dueDateInput.addEventListener('input', () => {
    validateDueDateInput(dueDateInput, dueDateError);
  });
  taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const isFormValid = validateForm(
      titleInput,
      dueDateInput,
      titleError,
      dueDateError
    );

    if (isFormValid) {
      modal.close();
      // console.log('form is valid');
      createNewTask(taskForm);
    }
  });
});




restoreFromLocalStorage();





taskList.addEventListener('click', (event) => {
  // Grab all Delete buttons
  const allDeleteButtons = document.querySelectorAll('#deleteButton');
 
  allDeleteButtons.forEach(deleteButton => {
    // Enable all Delete Buttons
    deleteButton.disabled = false;
    deleteButton.style.cursor = 'pointer';
  })
  const buttonId = event.target.parentNode.id;
 
  if (buttonId === 'deleteButton') {
    deleteTask(parseInt(event.target.parentNode.value));
  } else if (buttonId === 'editButton') {
    

    const {
      // modal,
      taskForm,
      titleInput,
      dueDateInput,
      titleError,
      dueDateError,
      cancelButton,
      editTaskDiv,
    } = editTask(parseInt(event.target.parentNode.value));
   

    
    const deleteButton = event.target.parentNode.nextElementSibling;
   
    // Disable Delete Button
    deleteButton.disabled = true;
    deleteButton.style.cursor = 'not-allowed';

    cancelButton.addEventListener('click', () => {
      
      editTaskDiv.style.display = 'none';
      // Enable Delete Button
      deleteButton.disabled = false;
      deleteButton.style.cursor = 'pointer';
    });
    

    titleInput.addEventListener('input', () => {
      validateTitleInput(titleInput, titleError);
    });
    dueDateInput.addEventListener('input', () => {
      validateDueDateInput(dueDateInput, dueDateError);
    });
    taskForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const isFormValid = validateForm(
        titleInput,
        dueDateInput,
        titleError,
        dueDateError
      );

      if (isFormValid) {
       
        editTaskDiv.style.display = 'none';
        createNewTask(taskForm);
      }

      // Enable Delete Button
      deleteButton.disabled = false;
      deleteButton.style.cursor = 'pointer';
    });
  }
});




