// import { tasks } from './formData';
import { tasks } from './newTask';

// Import images
import closeIcon from '../assets/images/icon-close.svg';

const taskDetails = document.querySelector('#task-details');
const { parseISO, format } = require('date-fns');
const priorities = [
  { value: 'low', color: 'var(--clr-light-blue' },
  { value: 'medium', color: 'var(--clr-light-orange)' },
  { value: 'high', color: 'var(--clr-light-red)' },
];
console.log(tasks);
export function displayTaskDetails(id) {
  // console.log('details button clicked');

  taskDetails.textContent = '';
  // Get current task by matching id
  let currentTask = tasks.filter((task) => task.id === id);
  currentTask = currentTask[0];
  // console.log(currentTask);

  // Create a task container
  const taskContainer = Object.assign(document.createElement('div'), {
    id: currentTask.id,
    className: 'task',
  });
  // Set background color based on priority
  for (const priority of priorities) {
    if (currentTask.priority === priority.value) {
      taskContainer.style.backgroundColor = priority.color;
      break;
    } else {
      taskContainer.style.backgroundColor = '';
    }
  }

  // Create wrapper for title and close button
  const titleButtonDiv = Object.assign(document.createElement('div'), {
    className: 'task__div task__div--details',
  });

  // Create title
  const taskTitle = Object.assign(document.createElement('p'), {
    className: 'task__title',
    htmlFor: `checkbox-${currentTask.id}`,
    textContent: currentTask.title,
  });

  // Create close button
  const closeButton = Object.assign(document.createElement('button'), {
    id: 'closeButton',
    className: 'button button--close',
    ariaLabel: `Close ${currentTask.title}`,
    value: currentTask.id,
  });
  // Set background color based on priority
  for (const priority of priorities) {
    if (currentTask.priority === priority.value) {
      closeButton.style.backgroundColor = priority.color;
      break;
    } else {
      closeButton.style.backgroundColor = '';
    }
  }

  // Create close image
  const closeImage = Object.assign(document.createElement('img'), {
    className: 'task__image',
    src: `${closeIcon}`,
    alt: '',
    width: '28',
    height: '28',
    title: 'Close',
  });

  // Add close image to close button
  closeButton.appendChild(closeImage);

  // Add title and close button to titleButtonDiv
  titleButtonDiv.append(taskTitle, closeButton);

  // Create paragraph element
  const taskDescription = Object.assign(document.createElement('p'), {
    textContent: currentTask.description,
  });

  // Create date - category container
  const dateCategoryDiv = Object.assign(document.createElement('div'), {
    className: 'task__div',
  });

  // Create date
  const taskDueDate = Object.assign(document.createElement('time'), {
    className: 'task__due-date',
    textContent: format(parseISO(currentTask.dueDate), 'MM/dd/yyyy'),
    dateTime: currentTask.dueDate,
  });

  // Create category
  const taskCategory = Object.assign(document.createElement('p'), {
    className: 'task__category',
    textContent: currentTask.category,
  });

  // Add date and category to dateCategoryDiv
  dateCategoryDiv.append(taskDueDate, taskCategory);

  // Create notes
  const taskNotes = Object.assign(document.createElement('p'), {
    className: 'task__notes',
    textContent: currentTask.notes,
  });

  // Add titleButtonDiv, taskDescription, dateCategoryDiv, taskNotes to taskContainer
  taskContainer.append(
    titleButtonDiv,
    taskDescription,
    dateCategoryDiv,
    taskNotes
  );

  // Add taskContainer to taskDetails
  taskDetails.appendChild(taskContainer);
}

taskDetails.addEventListener('click', (event) => {
  if (event.target.parentNode.id === 'closeButton') {
    const buttonValue = parseInt(event.target.parentNode.value);

    const task = taskDetails.querySelector(`div[id='${buttonValue}']`);

    task.style.display = 'none';
  }
});
