// import styles
import './styles/styles.css'
// import JS modules
import './scripts/newTodo'
import { showNewTaskForm } from './scripts/newTaskForm';

// Event listener for Add Task button
const addTaskButton = document.querySelector('#addTask');
addTaskButton.addEventListener('click', showNewTaskForm);


