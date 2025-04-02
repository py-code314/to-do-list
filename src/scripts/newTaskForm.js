/* Show Form when user clicks Add Task button */
import { format } from 'date-fns';
import { handleFormButtons } from './formData';
import { validateForm } from './formValidation';

// Import images

import blueCircleImg from '../assets/images/icon-blue-circle.svg'
import orangeCircleImg from '../assets/images/icon-orange-circle.svg'
import redCircleImg from '../assets/images/icon-red-circle.svg';

const content = document.querySelector('#content');

// Priorities object
const priorities = [
  { value: 'low', text: 'Low', image: blueCircleImg },
  { value: 'medium', text: 'Medium', image: orangeCircleImg },
  { value: 'high', text: 'High', image: redCircleImg },
];

// Statuses object
const statuses = [
  { value: 'incomplete', text: 'Incomplete' },
  { value: 'in-progress', text: 'In Progress' },
  { value: 'completed', text: 'Completed' },
];

// Categories object
const categories = [
  { value: 'inbox', text: 'Inbox' },
  { value: 'personal', text: 'Personal' },
  { value: 'work', text: 'Work' },
  { value: 'hobbies', text: 'Hobbies' },
];

// Format today's date
const today = format(new Date(), 'yyyy-MM-dd');

export function showNewTaskForm() {
  // Dialog modal
  const modal = Object.assign(document.createElement('dialog'), {
    className: 'modal',
  });

  // Create Form
  const taskForm = Object.assign(document.createElement('form'), {
    className: 'form',
    method: 'dialog',
    noValidate: true,
  });

  /* Create Form Header */
  const formHeader = Object.assign(document.createElement('header'), {
    className: 'form__header',
  });

  // Create Form Title
  const formTitle = Object.assign(document.createElement('h2'), {
    className: 'form__title',
    textContent: 'New Task',
  });

  // Create Paragraph element
  const instruction = Object.assign(document.createElement('p'), {
    textContent: 'Required fields.',
  });
  const asterisk1 = Object.assign(document.createElement('strong'), {
    className: 'form__asterisk',
    textContent: '*',
  });
  // Add Asterisk1 to Para
  instruction.insertAdjacentElement('afterbegin', asterisk1);

  // Add H2, Button, Para to Form Header
  formHeader.append(formTitle, instruction);

  /* Form Content */
  const formContent = Object.assign(document.createElement('div'), {
    className: 'form__content',
  });

  /* Create Title field */
  const titleField = Object.assign(document.createElement('div'), {
    className: 'form__control',
  });

  // Create Title Label
  const titleLabel = Object.assign(document.createElement('label'), {
    className: 'form__label',
    for: 'title',
    textContent: 'Title:',
  });
  const asterisk2 = Object.assign(document.createElement('strong'), {
    className: 'form__asterisk',
    textContent: '*',
  });
  titleLabel.appendChild(asterisk2);

  // Create Title Input
  const titleInput = Object.assign(document.createElement('input'), {
    id: 'title',
    className: 'form__input',
    type: 'text',
    name: 'title',
    required: true,
    autofocus: true,
  });

  // Add Label, Input to Title field
  titleField.append(titleLabel, titleInput);

  // Add Error Div
  const titleError = Object.assign(document.createElement('div'), {
    id: 'title-error',
    className: 'form__error',
  });

  /* Create Description field */
  const descriptionField = Object.assign(document.createElement('div'), {
    className: 'form__control',
  });

  // Create Description Label
  const descriptionLabel = Object.assign(document.createElement('label'), {
    className: 'form__label',
    for: 'description',
    textContent: 'Description: ',
  });

  // Create Description Input
  const descriptionInput = Object.assign(document.createElement('input'), {
    id: 'description',
    className: 'form__input',
    type: 'text',
    name: 'description',
  });

  // Add Label, Input to Description field
  descriptionField.append(descriptionLabel, descriptionInput);

  /* Create Due Date field */
  const dueDateField = Object.assign(document.createElement('div'), {
    className: 'form__control',
  });

  // Create Due Date Label
  const dueDateLabel = Object.assign(document.createElement('label'), {
    className: 'form__label',
    for: 'due-date',
    textContent: 'Due Date:',
  });
  const asterisk3 = Object.assign(document.createElement('strong'), {
    className: 'form__asterisk',
    textContent: '*',
  });
  dueDateLabel.appendChild(asterisk3);

  // Create Due Date Input
  const dueDateInput = Object.assign(document.createElement('input'), {
    id: 'due-date',
    className: 'form__input',
    type: 'date',
    name: 'dueDate',
    min: `${today}`,
    required: true,
  });

  // Add Label, Input to Due Date field
  dueDateField.append(dueDateLabel, dueDateInput);

  // Add Error Div
  const dueDateError = Object.assign(document.createElement('div'), {
    id: 'due-date-error',
    className: 'form__error',
  });

  /* Create Priority Fieldset */
  const priorityFieldset = Object.assign(document.createElement('fieldset'), {
    className: 'form__control',
  });

  // Create Priority Legend
  const priorityLegend = Object.assign(document.createElement('legend'), {
    className: 'form__legend',
    textContent: 'Priority: ',
  });

  // Create Wrapper for Radio buttons
  const priorityWrapper = Object.assign(document.createElement('div'), {
    className: 'form__wrapper',
  });

  // Create  Priority Radio buttons
  for (const priority of priorities) {
    // Create Priority Div
    const priorityDiv = Object.assign(document.createElement('div'), {
      className: 'form__div',
    });

    // Create Priority Input
    const priorityInput = Object.assign(document.createElement('input'), {
      id: `${priority.value}`,
      className: 'form__input',
      type: 'radio',
      name: 'priority',
      value: `${priority.value}`,
      checked: priority.value === 'medium' ? true : false,
    });

    // Create Priority Label
    const priorityLabel = Object.assign(document.createElement('label'), {
      for: `${priority.value}`,
      textContent: `${priority.text}`,
    });

    // Add Color Image
    const priorityImage = Object.assign(document.createElement('img'), {
      className: 'form__image',
      src: `${priority.image}`,
      alt: "pic",
      width: "15",
      height: "15"
    });

    // Add Input, Labels to Div
    priorityDiv.append(priorityInput, priorityLabel, priorityImage);
    // Add Div to Wrapper
    priorityWrapper.appendChild(priorityDiv);
    // Add Legend, Wrapper to Priority Field set
    priorityFieldset.append(priorityLegend, priorityWrapper);
  }

  /* Create Status field */
  const statusFieldset = Object.assign(document.createElement('fieldset'), {
    className: 'form__control',
  });

  // Create Status Legend
  const statusLegend = Object.assign(document.createElement('legend'), {
    className: 'form__legend',
    textContent: 'Status: ',
  });

  // Create Wrapper for Radio buttons
  const statusWrapper = Object.assign(document.createElement('div'), {
    className: 'form__wrapper',
  });

  // Create  Status Radio buttons
  for (const status of statuses) {
    // Create Status div
    const statusDiv = Object.assign(document.createElement('div'), {
      className: 'form__div',
    });

    // Create Status Input
    const statusInput = Object.assign(document.createElement('input'), {
      id: `${status.value}`,
      className: 'form__input',
      type: 'radio',
      name: 'status',
      value: `${status.value}`,
      checked: status.value === 'incomplete' ? true : false,
    });

    // Create Status Label
    const statusLabel = Object.assign(document.createElement('label'), {
      for: `${status.value}`,
      textContent: `${status.text}`,
    });

    // Add Legend, Input to Div
    statusDiv.append(statusInput, statusLabel);
    // Add status Div to Wrapper
    statusWrapper.appendChild(statusDiv);
    // Add Legend, Wrapper to Status Field set
    statusFieldset.append(statusLegend, statusWrapper);
  }

  /* Create Category field */
  const categoryField = Object.assign(document.createElement('div'), {
    className: 'form__control',
  });

  // Create Category Label
  const categoryLabel = Object.assign(document.createElement('label'), {
    className: 'form__label',
    for: 'category',
    textContent: 'Category: ',
  });

  // Create Category Options
  const categorySelect = Object.assign(document.createElement('select'), {
    id: 'category',
    className: 'form__select',
    name: 'category',
  });
  for (const category of categories) {
    const categoryOption = Object.assign(document.createElement('option'), {
      value: `${category.value}`,
      textContent: `${category.text}`,
      selected: category.value === 'incomplete' ? true : false,
    });
    categorySelect.appendChild(categoryOption);
  }

  // Add Label, Options to Category field
  categoryField.append(categoryLabel, categorySelect);

  /* Create Notes field */
  const notesField = document.createElement('div');
  notesField.classList.add('form__control');

  // Create Notes Label
  const notesLabel = Object.assign(document.createElement('label'), {
    className: 'form__label',
    for: 'notes',
    textContent: 'Notes: ',
  });

  // Create Notes Input
  const notesTextarea = Object.assign(document.createElement('textarea'), {
    id: 'notes',
    className: 'form__textarea',
    name: 'notes',
  });

  // Add Label, Input to Notes field
  notesField.append(notesLabel, notesTextarea);

  // Add Title, Description, Due Date, Priority, Status, Category, Notes to Form Content
  formContent.append(
    titleField,
    titleError,
    descriptionField,
    dueDateField,
    dueDateError,
    priorityFieldset,
    statusFieldset,
    categoryField,
    notesField
  );

  /* Add Buttons */
  // Create fFooter
  const formFooter = Object.assign(document.createElement('footer'), {
    className: 'form__footer',
  });

  // Create Cancel button
  const cancelButton = Object.assign(document.createElement('button'), {
    id: 'cancel',
    className: 'button button--cancel',
    type: 'button',
    value: 'cancel',
    textContent: 'Cancel',
  });

  // Create Submit button
  const submitButton = Object.assign(document.createElement('button'), {
    id: 'submit',
    className: 'button button--submit',
    type: 'submit',
    value: 'submit',
    textContent: 'Add',
  });

  // Add Cancel, Submit buttons to Footer
  formFooter.append(cancelButton, submitButton);

  // Add Header, Content, Footer to Form
  taskForm.append(formHeader, formContent, formFooter);

  // Add Form, Modal to parent elements
  modal.appendChild(taskForm);
  content.appendChild(modal);

  // Reset Form
  // taskForm.reset()
  // Show Modal
  modal.showModal();

  return {
    modal,
    taskForm,
    titleInput,
    dueDateInput,
    titleError,
    dueDateError,
    cancelButton,
  };
}
