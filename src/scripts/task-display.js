// Import data
import { tasks } from './new-task';

// Import images
import editIcon from '../assets/images/icon-edit.svg';
import deleteIcon from '../assets/images/icon-delete.svg';
import expandIcon from '../assets/images/icon-expand.svg';

// Import date functions
const { format, isTomorrow, parseISO } = require('date-fns');
// Get elements from DOM
const taskList = document.querySelector('#task-list');
// Create priorities array
const priorities = [
  { value: 'low', color: 'var(--clr-light-blue' },
  { value: 'medium', color: 'var(--clr-light-orange)' },
  { value: 'high', color: 'var(--clr-light-red)' },
];

/* Displays the given tasks in the task list */
export function displayTask(tasks) {
  taskList.textContent = '';

  tasks.forEach((task) => {
    // Create a task container
    const taskElement = document.createElement('li');
    taskElement.id = task.id;
    taskElement.className = 'task';

    // Set background color based on priority
    const priority = priorities.find((p) => p.value === task.priority);
    if (priority) {
      taskElement.style.backgroundColor = priority.color;
    }

    // Create checkbox, title and buttons container
    const titleButtons = document.createElement('div');
    titleButtons.className = 'task__wrapper';

    // Create container for checkbox and title
    const checkboxTitle = document.createElement('div');
    checkboxTitle.className = 'task__div';

    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.id = `checkbox-${task.id}`;
    checkbox.className = 'task__input';
    checkbox.type = 'checkbox';
    checkbox.name = 'checkbox';
    checkbox.checked = task.status === 'complete';
    checkbox.value = task.id;

    const title = document.createElement('label');
    title.className = 'task__title';
    title.htmlFor = `checkbox-${task.id}`;
    title.textContent = task.title;

    checkboxTitle.append(checkbox, title);

    // Create buttons container
    const buttons = document.createElement('div');
    buttons.className = 'task__div';

    // Create edit and delete buttons
    const editButton = document.createElement('button');
    editButton.className = 'button button--edit';
    editButton.ariaLabel = `Edit ${task.title}`;
    editButton.value = task.id;

    if (priority) {
      editButton.style.backgroundColor = priority.color;
    }

    const editImage = document.createElement('img');
    editImage.className = 'task__image';
    editImage.src = editIcon;
    editImage.alt = '';
    editImage.width = '15';
    editImage.height = '15';
    editImage.title = 'Edit';

    editButton.appendChild(editImage);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'button button--delete';
    deleteButton.ariaLabel = `Delete ${task.title}`;
    deleteButton.value = task.id;

    if (priority) {
      deleteButton.style.backgroundColor = priority.color;
    }

    const deleteImage = document.createElement('img');
    deleteImage.className = 'task__image';
    deleteImage.src = deleteIcon;
    deleteImage.alt = '';
    deleteImage.width = '17';
    deleteImage.height = '17';
    deleteImage.title = 'Delete';

    deleteButton.appendChild(deleteImage);

    buttons.append(editButton, deleteButton);

    titleButtons.append(checkboxTitle, buttons);

    // Create details(date, category and expand button) container
    const taskDetails = document.createElement('div');
    taskDetails.className = 'task__wrapper';

    // Create date and category container
    const dateCategory = document.createElement('div');
    dateCategory.className = 'task__div';

    // Create date and category
    const dueDate = document.createElement('time');
    dueDate.className = 'task__due-date';
    dueDate.textContent = formatTaskDueDate(task.dueDate, task.status);
    dueDate.dateTime = task.dueDate;

    const category = document.createElement('p');
    category.className = 'task__category';
    category.textContent = task.category;

    dateCategory.append(dueDate, category);

    // Create expand button
    const expandButton = document.createElement('button');
    expandButton.className = 'button button--details';
    expandButton.ariaLabel = `Show details for ${task.title}`;
    expandButton.value = task.id;

    if (priority) {
      expandButton.style.backgroundColor = priority.color;
    }

    const expandImage = document.createElement('img');
    expandImage.className = 'task__image';
    expandImage.src = expandIcon;
    expandImage.alt = '';
    expandImage.width = '17';
    expandImage.height = '17';
    expandImage.title = 'Details';

    expandButton.appendChild(expandImage);

    taskDetails.append(dateCategory, expandButton);

    taskElement.append(titleButtons, taskDetails);

    taskList.appendChild(taskElement);
  });
}

/* Format the due date of a task based on its status */
function formatTaskDueDate(dueDate, status) {
  if (status === 'incomplete') {
    const today = format(new Date(), 'yyyy-MM-dd');
    if (dueDate < today) {
      return 'Overdue';
    } else if (dueDate === today) {
      return 'Today';
    } else if (isTomorrow(parseISO(dueDate))) {
      return 'Tomorrow';
    } else {
      return format(parseISO(dueDate), 'MM/dd/yyyy');
    }
  } else if (status === 'complete') {
    return 'Completed';
  }
}

// Display default tasks on page load
displayTask(tasks);
