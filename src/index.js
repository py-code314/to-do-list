// import styles
import './styles/styles.css'
// import JS modules
import './scripts/newTodo'
import { showNewTaskForm } from './scripts/addTaskForm';

// Event listener for Add Task button
const addTaskButton = document.querySelector('#addTask');
// console.log(addTaskButton);

addTaskButton.addEventListener('click', showNewTaskForm);


