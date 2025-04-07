// import styles
import './styles/styles.css';
// import JS modules
import './scripts/newTodo';
// import './scripts/formButtons'

/* Import functions */
import { showNewTaskForm } from './scripts/newTaskForm';
import {
  validateTitleInput,
  validateDueDateInput,
  validateForm,
} from './scripts/formValidation';
import { createNewTask } from './scripts/formData';
import { displayTasks } from './scripts/displayTasks';
import { addToLocalStorage } from './scripts/localStorage';
import { restoreFromLocalStorage } from './scripts/localStorage';
import { deleteTask } from './scripts/deleteTask';
import { editTask } from './scripts/editTask';
import { addNewProject } from './scripts/newProject';

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

// displayTasks()
taskList.addEventListener('tasksUpdated', displayTasks);
taskList.addEventListener('tasksUpdated', addToLocalStorage);
restoreFromLocalStorage();
// Check Local Storage previously accessed or not
// if (!localStorage.getItem("tasks")) {
//   addToLocalStorage()
// } else {
//   restoreFromLocalStorage()
// }

taskList.addEventListener('click', (event) => {
  const elementId = event.target.parentNode.id;
  if (elementId === 'deleteButton') {
    deleteTask(parseInt(event.target.parentNode.value));
  } else if (elementId === 'editButton') {
    console.log('edit button clicked');

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
    console.log(taskForm);

    console.log(deleteButton);
    // Disable Delete Button
    deleteButton.disabled = true;
    deleteButton.style.cursor = 'not-allowed';

    cancelButton.addEventListener('click', () => {
      // modal.close();
      editTaskDiv.style.display = 'none';
    });
    // Enable Delete Button
    deleteButton.disabled = false;
    deleteButton.style.cursor = 'pointer';

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
        // modal.close();
        editTaskDiv.style.display = 'none';
        createNewTask(taskForm);
      }

      // Enable Delete Button
      deleteButton.disabled = false;
      deleteButton.style.cursor = 'pointer';
    });
  }
});

// Get New List button

const newProjectButton = document.querySelector('#new-project-button');
console.log(newProjectButton);
newProjectButton.addEventListener('click', addNewProject)
