// Import data and functions
import { tasks } from './new-task';
import {
  createContainer,
  createInput,
  createLabel,
  createButton,
  createImage,
  createParagraph,
  createTime,
} from './dom-utils';
const { format, isTomorrow, parseISO } = require('date-fns');

// Import images
import editIcon from '../assets/images/icon-edit.svg';
import deleteIcon from '../assets/images/icon-delete.svg';
import expandIcon from '../assets/images/icon-expand.svg';

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
    const taskElement = createContainer(taskList, 'li', task.id, 'task');

    // Set background color based on priority
    const priority = priorities.find(
      (priority) => priority.value === task.priority
    );
    if (priority) {
      taskElement.style.backgroundColor = priority.color;
    }

    const titleButtons = createContainer(
      taskElement,
      'div',
      '',
      'task__wrapper'
    );

    const checkboxTitle = createContainer(titleButtons, 'div', '', 'task__div');

    const checkbox = createInput(
      checkboxTitle,
      `checkbox-${task.id}`,
      'task__input',
      'checkbox',
      'status',
      task.id
    );
    checkbox.checked = task.status === 'complete';

    const title = createLabel(
      checkboxTitle,
      'task__title',
      `checkbox-${task.id}`,
      task.title
    );

    const buttons = createContainer(titleButtons, 'div', '', 'task__div');

    const editButton = createButton(
      buttons,
      '',
      'button button--edit',
      'button',
      task.id,
      ''
    );
    editButton.ariaLabel = `Edit ${task.title}`;

    if (priority) {
      editButton.style.backgroundColor = priority.color;
    }

    const editImage = createImage(
      editButton,
      'task__image',
      editIcon,
      '',
      '15',
      '15',
      'Edit'
    );

    const deleteButton = createButton(
      buttons,
      '',
      'button button--delete',
      'button',
      task.id,
      ''
    );
    deleteButton.ariaLabel = `Delete ${task.title}`;

    if (priority) {
      deleteButton.style.backgroundColor = priority.color;
    }

    const deleteImage = createImage(
      deleteButton,
      'task__image',
      deleteIcon,
      '',
      '17',
      '17',
      'Delete'
    );

    const taskDetails = createContainer(
      taskElement,
      'div',
      '',
      'task__wrapper'
    );

    const dateCategory = createContainer(taskDetails, 'div', '', 'task__div');

    // Create date and category
    const dueDate = createTime(
      dateCategory,
      'task__due-date',
      formatTaskDueDate(task.dueDate, task.status),
      task.dueDate
    );

    const category = createParagraph(
      dateCategory,
      'task__category',
      task.category
    );

    const expandButton = createButton(
      taskDetails,
      '',
      'button button--details',
      'button',
      task.id,
      ''
    );
    expandButton.ariaLabel = `Show details for ${task.title}`;

    if (priority) {
      expandButton.style.backgroundColor = priority.color;
    }

    const expandImage = createImage(
      expandButton,
      'task__image',
      expandIcon,
      '',
      '17',
      '17',
      'Details'
    );
  });
}

/* Format the due date of a task based on its status */
/* Use parseISO to account for time zone differences */
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
