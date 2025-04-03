import { tasks } from './formData';

// Import Images
import editIcon from '../assets/images/icon-edit.svg'
import deleteIcon from '../assets/images/icon-delete.svg'


const { parseISO, format } = require('date-fns');

export function displayTasks() {
  const content = document.querySelector('#content');
  content.textContent = ""

  // Create Tasks Container
  const tasksContainer = Object.assign(document.createElement('ul'), {
    className: 'tasks',
  });

  // Add Task Container to Content
  content.appendChild(tasksContainer);

  // console.log(tasks);
  tasks.map((task) => {
    // Priorities object
    const priorities = [
      { value: 'low', color: 'var(--clr-light-blue' },
      { value: 'medium', color: 'var(--clr-light-orange)' },
      { value: 'high', color: 'var(--clr-light-red)' },
    ];

    // Create a Task Div
    const taskDiv = Object.assign(document.createElement('li'), {
      className: 'task',
    });
    // Set Background color based on Priority
    for (const priority of priorities) {
      if (task.priority === priority.value) {
        taskDiv.style.backgroundColor = priority.color;
        break;
      } else {
        taskDiv.style.backgroundColor = '';
      }
    }

    // Create container for Title div and Buttons div
    const titleButtonsDiv = Object.assign(document.createElement('div'), {
      className: 'task__container',
    });

    // Create Title container
    const titleDiv = Object.assign(document.createElement('div'), {
      className: 'task__div',
    });

    // Create Check box
    const taskStatus = Object.assign(document.createElement('input'), {
      id: task.id,
      className: 'task__input',
      type: 'checkbox',
      name: 'status',
      checked: task.status === 'completed' ? true : false,
    });

    // Create Title
    const taskTitle = Object.assign(document.createElement('label'), {
      className: 'task__title',
      htmlFor: task.id,
      textContent: task.title,
    });

    // Add Check box and Title to Title Div
    titleDiv.append(taskStatus, taskTitle);

    // Create Buttons Container
    const buttonsDiv = Object.assign(document.createElement('div'), {
      className: 'task__buttons',
    });

    // Create Edit button
    const editButton = Object.assign(document.createElement('button'), {
      id: 'editButton',
      className: 'button button--edit',
      ariaLabel: `Edit ${task.title}`
    });
    // Set Background color based on Priority
    for (const priority of priorities) {
      if (task.priority === priority.value) {
        editButton.style.backgroundColor = priority.color;
        break;
      } else {
        editButton.style.backgroundColor = '';
      }
    }

    // Create Edit Image
    const editImage = Object.assign(document.createElement('img'), {
      className: 'task__image',
      src: `${editIcon}`,
      alt: '',
      width: '22',
      height: '22',
      title: 'Edit'
    });

    // Add Edit image to Edit button
    editButton.appendChild(editImage);

    // Create Edit button
    const deleteButton = Object.assign(document.createElement('button'), {
      id: 'deleteButton',
      className: 'button button--delete',
      ariaLabel: `Delete ${task.title}`
    });
    // Set Background color based on Priority
    for (const priority of priorities) {
      if (task.priority === priority.value) {
        deleteButton.style.backgroundColor = priority.color;
        break;
      } else {
        deleteButton.style.backgroundColor = '';
      }
    }

    // Create Edit Image
    const deleteImage = Object.assign(document.createElement('img'), {
      className: 'task__image',
      src: `${deleteIcon}`,
      alt: '',
      width: '22',
      height: '22',
      title: 'Delete'
    });

    // Add Edit image to Edit button
    deleteButton.appendChild(deleteImage);

    // Add Edit button to Buttons Container
    buttonsDiv.append(editButton, deleteButton);

    // Add Title div and Buttons div to Title Buttons container
    titleButtonsDiv.append(titleDiv, buttonsDiv);

    // Create Description
    const taskDescription = Object.assign(document.createElement('p'), {
      className: 'task__description',
      textContent: task.description,
    });

    // Create Date - Category container
    const dateCategoryDiv = Object.assign(document.createElement('div'), {
      className: 'task__div',
    });

    // Parse Due Date
    const parsedDate = parseISO(task.dueDate);

    // Create Date
    const taskDueDate = Object.assign(document.createElement('p'), {
      className: 'task__due-date',
      textContent: format(parsedDate, 'MM/dd/yyyy'),
    });

    // Create Category
    const taskCategory = Object.assign(document.createElement('p'), {
      className: 'task__category',
      textContent: task.category,
    });

    // Add Date and Category to Date - Category Container
    dateCategoryDiv.append(taskDueDate, taskCategory);

    // Create Notes
    const taskNotes = Object.assign(document.createElement('p'), {
      className: 'task__notes',
      textContent: task.notes,
    });

    // Add Title, Description, Date, Category and Notes to Task Div
    taskDiv.append(
      titleButtonsDiv,
      taskDescription,
      dateCategoryDiv,
      taskNotes
    );

    // Add Task Div to Tasks Container
    tasksContainer.appendChild(taskDiv);
  });
}
