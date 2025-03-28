/* Show Form when user clicks Add Task button */
import { format } from 'date-fns';
import closeIcon from '../assets/images/icon-close.svg';

const content = document.querySelector('#content');

export function showNewTaskForm() {
  // Dialog modal
  const modal = document.createElement('dialog');
  modal.classList.add('modal');

  // Create Form
  const taskForm = Object.assign(document.createElement('form'), {
    className: 'form',
    method: 'dialog',
  });

  /* Create Form Header */
  const formHeader = document.createElement('header');
  formHeader.classList.add('form__header');

  // Create Form Title
  const formTitle = Object.assign(document.createElement('h2'), {
    className: 'form__title',
    textContent: 'New Task',
  });

  // Create Close Button
  const closeButton = Object.assign(document.createElement('button'), {
    id: 'closeButton',
    className: 'button button--close',
    type: 'button',
    value: 'close',
  });

  // Create Image element
  const closeImage = Object.assign(document.createElement('img'), {
    className: 'form__image',
    src: `${closeIcon}`,
    alt: 'Close',
    title: 'Close',
    width: '30',
    height: '30',
  });
  closeButton.appendChild(closeImage);

  // Create Paragraph element
  const instruction = document.createElement('p');
  instruction.textContent = 'Required fields.';
  const asterisk1 = Object.assign(document.createElement('strong'), {
    className: 'form__asterisk',
    textContent: '*',
  });
  // Add Asterisk1 to Para
  instruction.insertAdjacentElement('afterbegin', asterisk1);

  // Add H2, Button, Para to Form Header
  formHeader.append(formTitle, closeButton, instruction);

  /* Form Content */
  const formContent = document.createElement('div');
  formContent.classList.add('form__content');

  /* Create Title field */
  const titleField = document.createElement('div');
  titleField.classList.add('form__control');

  // Create Title Label
  const titleLabel = Object.assign(document.createElement('label'), {
    className: 'form__label',
    for: 'title',
    textContent: 'Title:',
  });
  const asterisk2 = Object.assign(document.createElement('strong'), {
    className: 'form__asterisk',
    textContent: '*'
  });
  titleLabel.appendChild(asterisk2);

  // Create Title Input
  const titleInput = Object.assign(document.createElement('input'), {
    id: 'title',
    className: 'form__input',
    type: 'text',
    name: 'title',
    required: true,
  });

  // Add Label, Input to Title field
  titleField.append(titleLabel, titleInput);

  /* Create Description field */
  const descriptionField = document.createElement('div');
  descriptionField.classList.add('form__control');

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
  const dueDateField = document.createElement('div');
  dueDateField.classList.add('form__control');

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

  const today = format(new Date(), 'yyyy-MM-dd');
  console.log(today);
  // Create Due Date Input
  const dueDateInput = Object.assign(document.createElement('input'), {
    id: 'due-date',
    className: 'form__input',
    type: 'date',
    name: 'due-date',
    min: `${today}`,
    required: true,
  });

  // Add Label, Input to Due Date field
  dueDateField.append(dueDateLabel, dueDateInput);


  // Priorities object
  const priorities = [
    {
      value: 'low',
      text: 'Low',
    },
    {
      value: 'medium',
      text: 'Medium',
    },
    {
      value: 'high',
      text: 'High',
    },
  ];

  /* Create Priority Fieldset */
  const priorityFieldset = document.createElement('fieldset');
  priorityFieldset.classList.add('form__control');

  // Create Priority Legend
  const priorityLegend = Object.assign(document.createElement('legend'), {
    className: 'form__legend',
    textContent: 'Priority: ',
  });

  // Add Legend to Fieldset
  priorityFieldset.appendChild(priorityLegend);

  // Create Wrapper for Radio buttons
  const priorityWrapper = Object.assign(document.createElement('div'), {
    className: 'form__wrapper',
  });

  // Add Wrapper to Priority Field set
  priorityFieldset.appendChild(priorityWrapper);

  // Create  Priority Radio buttons
  for (const priority of priorities) {
    // Create Priority Div
    const priorityDiv = Object.assign(document.createElement('div'), {
      className: 'form__div'
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

    //TODO: use append instead of appendChild
    // Create Priority Label
    const priorityLabel = Object.assign(document.createElement('label'), {
      for: `${priority.value}`,
      textContent: `${priority.text}`,
    });

    // Add Legend, Input to Div
    priorityDiv.append(priorityInput, priorityLabel);
    // Add priority div to wrapper
    priorityWrapper.append(priorityDiv);
  }


  // Statuses object
  const statuses = [
    {
      value: 'incomplete',
      text: 'Incomplete',
    },
    {
      value: 'in-progress',
      text: 'In Progress',
    },
    {
      value: 'completed',
      text: 'Completed',
    },
  ];

  /* Create Status field */
  const statusFieldset = document.createElement('fieldset');
  statusFieldset.classList.add('form__control');

  // Create Status Legend
  const statusLegend = Object.assign(document.createElement('legend'), {
    className: 'form__legend',
    textContent: 'Status: ',
  });

  // Add Legend to Fieldset
  statusFieldset.appendChild(statusLegend);

  // Create Wrapper for Radio buttons
  const statusWrapper = Object.assign(document.createElement('div'), {
    className: 'form__wrapper',
  });

  // Add Wrapper to Status Field set
  statusFieldset.appendChild(statusWrapper);

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
    // Add status div to wrapper
    statusWrapper.append(statusDiv);
  }


  // Categories object
  const categories = [
    { value: 'inbox', text: 'Inbox' },
    { value: 'personal', text: 'Personal' },
    { value: 'work', text: 'Work' },
    { value: 'hobbies', text: 'Hobbies' },
  ];

  /* Create Category field */
  const categoryField = document.createElement('div');
  categoryField.classList.add('form__control');

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
    descriptionField,
    dueDateField,
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
    textContent: 'Cancel'
  });

  // Create Submit button
  const submitButton = Object.assign(document.createElement('button'), {
    id: 'submit',
    className: 'button button--submit',
    type: 'submit',
    value: 'submit',
    textContent: 'Add'
  });

  // Add Cancel, Submit buttons to Footer
  formFooter.append(cancelButton, submitButton);

  // Add Header, Content, Footer to Form
  taskForm.append(formHeader, formContent, formFooter);

  // Add Form, Modal to parent elements
  modal.appendChild(taskForm);
  content.appendChild(modal);

  modal.showModal();
}
