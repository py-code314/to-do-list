// Import data and functions
import { tasks } from './new-task';
import {
  createContainer,
  createButton,
  createImage,
  createParagraph,
} from './dom-utils';
const { parseISO, format } = require('date-fns');

// Import images
import closeIcon from '../assets/images/icon-close.svg';

// Get elements from DOM
const taskDetails = document.querySelector('#task-details');

// Create priorities array
const priorities = [
  { value: 'low', color: 'var(--clr-light-blue' },
  { value: 'medium', color: 'var(--clr-light-orange)' },
  { value: 'high', color: 'var(--clr-light-red)' },
];

export function displayTaskDetails(taskId) {
  taskDetails.textContent = '';

  // Get current task
  const task = tasks.find((task) => task.id === taskId);

  // Create a task container
  const taskElement = createContainer(taskDetails, 'div', task.id, 'task');

  // Set background color based on priority
  const priority = priorities.find(
    (priority) => priority.value === task.priority
  );
  if (priority) {
    taskElement.style.backgroundColor = priority.color;
  }

  // Create title and button container
  const titleButtonDiv = createContainer(
    taskElement,
    'div',
    '',
    'task__div task__div--details'
  );

  const taskTitle = createParagraph(titleButtonDiv, 'task__title', task.title);

  const closeButton = createButton(
    taskElement,
    'closeButton',
    'button button--close',
    'button',
    task.id,
    ''
  );

  // Set background color based on priority
  if (priority) {
    closeButton.style.backgroundColor = priority.color;
  }

  const closeImage = createImage(
    closeButton,
    'task__image',
    closeIcon,
    '',
    28,
    28,
    'Close'
  );

  // Create description
  const taskDescription = createParagraph(taskElement, '', task.description);

  // Create due date and category container
  const dateCategoryDiv = createContainer(taskElement, 'div', '', 'task__div');

  const taskDueDate = createParagraph(
    dateCategoryDiv,
    'task__due-date',
    format(parseISO(task.dueDate), 'MM/dd/yyyy'),
    task.dueDate
  );

  const taskCategory = createParagraph(
    dateCategoryDiv,
    'task__category',
    task.category
  );

  // Create notes
  const taskNotes = createParagraph(taskElement, 'task__notes', task.notes);
}

/* Event listener for click on close button */
taskDetails.addEventListener('click', (event) => {
  const button = event.target.parentNode;
  if (button.id === 'closeButton') {
    const buttonValue = parseInt(button.value);
    
    // Find task and hide it
    const task = taskDetails.querySelector(`div[id='${buttonValue}']`);
    task.style.display = 'none';
  }
});
