import { tasks } from './formData';

// Import images
import editIcon from '../assets/images/icon-edit.svg';
import deleteIcon from '../assets/images/icon-delete.svg';
import expandIcon from '../assets/images/icon-expand.svg'

const { parseISO, format } = require('date-fns');
const taskList = document.querySelector('#task-list');
const priorities = [
  { value: 'low', color: 'var(--clr-light-blue' },
  { value: 'medium', color: 'var(--clr-light-orange)' },
  { value: 'high', color: 'var(--clr-light-red)' },
];

export function displayTask(filteredTasks) {
  taskList.textContent = '';

  filteredTasks.map((task) => {
    // Create a task container
    const taskContainer = Object.assign(document.createElement('li'), {
      id: task.id,
      className: 'task',
    });
    // Set background color based on priority
    for (const priority of priorities) {
      if (task.priority === priority.value) {
        taskContainer.style.backgroundColor = priority.color;
        break;
      } else {
        taskContainer.style.backgroundColor = '';
      }
    }

    // Create wrapper for checkboxTitleDiv and buttonsDiv
    const taskHeader = Object.assign(document.createElement('div'), {
      className: 'task__wrapper',
    });

    // Create  container for checkbox and title
    const checkboxTitleDiv = Object.assign(document.createElement('div'), {
      className: 'task__div',
    });

    // Create check box
    const taskCheckbox = Object.assign(document.createElement('input'), {
      id: `checkbox-${task.id}`,
      className: 'task__input',
      type: 'checkbox',
      name: 'checkbox',
      checked: task.status === 'completed' ? true : false,
    });

    // Create title
    const taskTitle = Object.assign(document.createElement('label'), {
      className: 'task__title',
      htmlFor: `checkbox-${task.id}`,
      textContent: task.title,
    });

    // Add check box and title to checkboxTitleDiv
    checkboxTitleDiv.append(taskCheckbox, taskTitle);

    // Create buttons container
    const buttonsDiv = Object.assign(document.createElement('div'), {
      className: 'task__div',
    });

    // Create edit button
    const editButton = Object.assign(document.createElement('button'), {
      id: 'editButton',
      className: 'button button--edit',
      ariaLabel: `Edit ${task.title}`,
      value: task.id,
    });
    // Set background color based on priority
    for (const priority of priorities) {
      if (task.priority === priority.value) {
        editButton.style.backgroundColor = priority.color;
        break;
      } else {
        editButton.style.backgroundColor = '';
      }
    }

    // Create edit image
    const editImage = Object.assign(document.createElement('img'), {
      className: 'task__image',
      src: `${editIcon}`,
      alt: '',
      width: '15',
      height: '15',
      title: 'Edit',
    });

    // Add edit image to edit button
    editButton.appendChild(editImage);

    // Create delete button
    const deleteButton = Object.assign(document.createElement('button'), {
      id: 'deleteButton',
      className: 'button button--delete',
      ariaLabel: `Delete ${task.title}`,
      value: task.id,
    });
    // Set background color based on priority
    for (const priority of priorities) {
      if (task.priority === priority.value) {
        deleteButton.style.backgroundColor = priority.color;
        break;
      } else {
        deleteButton.style.backgroundColor = '';
      }
    }

    // Create delete image
    const deleteImage = Object.assign(document.createElement('img'), {
      className: 'task__image',
      src: `${deleteIcon}`,
      alt: '',
      width: '17',
      height: '17',
      title: 'Delete',
    });

    // Add delete image to delete button
    deleteButton.appendChild(deleteImage);

    // Add edit and delete buttons to buttons container
    buttonsDiv.append(editButton, deleteButton);

    // Add checkboxTitleDiv and buttonsDiv to Title Buttons container
    taskHeader.append(checkboxTitleDiv, buttonsDiv);

    // Create wrapper for dateCategoryDiv and detailsButton
    const taskBody = Object.assign(document.createElement('div'), {
      className: 'task__wrapper',
    });

    // Create date - category container
    const dateCategoryDiv = Object.assign(document.createElement('div'), {
      className: 'task__div',
    });

    // Create date
    const taskDueDate = Object.assign(document.createElement('time'), {
      className: 'task__due-date',
      textContent: format(parseISO(task.dueDate), 'MM/dd/yyyy'),
      dateTime: task.dueDate,
    });

    // Create category
    const taskCategory = Object.assign(document.createElement('p'), {
      className: 'task__category',
      textContent: task.category,
    });

    // Add date and category to dateCategoryDiv
    dateCategoryDiv.append(taskDueDate, taskCategory);

    // Create details button
    const detailsButton = Object.assign(document.createElement('button'), {
      id: 'detailsButton',
      className: 'button button--details',
      ariaLabel: `Show details for ${task.title}`,
      value: task.id,
    });
    // Set background color based on priority
    for (const priority of priorities) {
      if (task.priority === priority.value) {
        detailsButton.style.backgroundColor = priority.color;
        break;
      } else {
        detailsButton.style.backgroundColor = '';
      }
    }

    // Create expand image
    const expandImage = Object.assign(document.createElement('img'), {
      className: 'task__image',
      src: `${expandIcon}`,
      alt: '',
      width: '17',
      height: '17',
      title: 'Details',
    });

    // Add expand image to details button
    detailsButton.appendChild(expandImage);

    // Add dateCategoryDiv and detailsButton to taskBody
    taskBody.append(dateCategoryDiv, detailsButton)

    // Add checkbox, title, date, category, buttons  to task container
    taskContainer.append(taskHeader, taskBody);

    // Add taskContainer to taskList
    taskList.appendChild(taskContainer);
  });
}

taskList.addEventListener('tasksUpdated', () => {
  // Filter tasks with category inbox
  const tasksInbox = tasks.filter((task) => task.category === 'Inbox');
  displayTask(tasksInbox);
});
