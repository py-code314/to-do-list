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

const content = document.querySelector('#content');

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
content.addEventListener('itemsUpdated', displayTasks)
content.addEventListener('itemsUpdated', addToLocalStorage)
restoreFromLocalStorage()