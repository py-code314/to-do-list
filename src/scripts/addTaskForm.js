// show form when user clicks Add Task button

import closeIcon from '../assets/images/icon-close.svg';

const content = document.querySelector('#content');

export function showNewTaskForm() {
  // Dialog modal
  const modal = document.createElement('dialog');
  modal.classList.add('modal');

  // Create form
  const taskForm = Object.assign(document.createElement('form'), {
    className: 'form',
    method: 'dialog',
  });

  // Create form header
  const formHeader = document.createElement('header');
  formHeader.classList.add('form__header');

  // Create form title
  const formTitle = Object.assign(document.createElement('h2'), {
    className: 'form__title',
    textContent: 'Add New Task',
  });

  // Create close button
  const closeButton = Object.assign(document.createElement('button'), {
    id: 'closeButton',
    className: 'button button--close',
    type: 'button',
    value: 'close',
  });

  // Create image element
  const closeImage = Object.assign(document.createElement('img'), {
    className: 'form__image',
    src: `${closeIcon}`,
    alt: 'Close',
    title: 'Close',
    width: '30',
    height: '30',
  });
  closeButton.appendChild(closeImage);

  // Create paragraph element
  const instruction = document.createElement('p');
  instruction.textContent = 'Required fields.';
  const asterisk1 = document.createElement('strong');
  asterisk1.textContent = '*';
  // Add asterisk1 to para
  instruction.insertAdjacentElement('afterbegin', asterisk1);

  // Add h2, button, para to form header
  formHeader.append(formTitle, closeButton, instruction);

  /* Form content */
  const formContent = document.createElement('div');
  formContent.classList.add('form__content');

  // Create title field
  const titleField = document.createElement('div');
  titleField.classList.add('form__control');

  // Create title label
  const titleLabel = Object.assign(document.createElement('label'), {
    className: 'form__label',
    for: 'title',
    textContent: 'Title:',
  });
  const asterisk2 = document.createElement('strong');
  asterisk2.textContent = '* ';
  titleLabel.appendChild(asterisk2);

  // Create title input
  const titleInput = Object.assign(document.createElement('input'), {
    id: 'title',
    className: 'form__input',
    type: 'text',
    name: 'title',
    required: true,
  });

  // Add label, input to title field
  titleField.append(titleLabel, titleInput);

  // Create description field
  const descriptionField = document.createElement('div');
  descriptionField.classList.add('form__control');

  // Create description label
  const descriptionLabel = Object.assign(document.createElement('label'), {
    className: 'form__label',
    for: 'description',
    textContent: 'Description: ',
  });

  // Create description input
  const descriptionInput = Object.assign(document.createElement('input'), {
    id: 'description',
    className: 'form__input',
    type: 'text',
    name: 'description',
  });

  // Add label, input to description field
  descriptionField.append(descriptionLabel, descriptionInput);

  /* Create due date field */
  const dueDateField = document.createElement('div');
  dueDateField.classList.add('form__control');

  // Create due date label
  const dueDateLabel = Object.assign(document.createElement('label'), {
    className: 'form__label',
    for: 'due-date',
    textContent: 'Due Date:',
  });
  const asterisk3 = document.createElement('strong');
  asterisk3.textContent = '* ';
  dueDateLabel.appendChild(asterisk3);

  // Create due date input
  const dueDateInput = Object.assign(document.createElement('input'), {
    id: 'due-date',
    className: 'form__input',
    type: 'date',
    name: 'due-date',
    required: true,
  });

  // Add label, input to due date field
  dueDateField.append(dueDateLabel, dueDateInput);

  const priorities = [
    {
      value: '',
      text: 'Select One',
    },
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

  // // Create priority field
  // const priorityField = document.createElement('div');
  // priorityField.classList.add('form__control');

  // // Create priority label
  // const priorityLabel = Object.assign(document.createElement('label'), {
  //   className: 'form__label',
  //   for: 'priority',
  //   textContent: 'Priority: ',
  // });

  // // Create priority options
  // const prioritySelect = Object.assign(document.createElement('select'), {
  //   id: 'priority',
  //   className: 'form__select',
  //   name: 'priority',
  // });
  // for (const priority of priorities) {
  //   const priorityOption = Object.assign(document.createElement('option'), {
  //     value: `${priority.value}`,
  //     textContent: `${priority.text}`,
  //   });
  //   prioritySelect.appendChild(priorityOption);
  // }

  // // Add label, options to priority field
  // priorityField.append(priorityLabel, prioritySelect);


  // Create priority fieldset
  const priorityFieldset = document.createElement('fieldset');
  priorityFieldset.classList.add('form__control'); 

  // Create priority legend
  const priorityLegend = Object.assign(document.createElement('legend'), {
    className: 'form__legend',
    textContent: 'Priority'
  });

  // Add legend to fieldset
  priorityFieldset.appendChild(priorityLegend)

  // Create  priority radio buttons
  for (const priority of priorities) {
    // Create priority div
    const priorityDiv = document.createElement('div');

    // Create priority input
    const priorityInput = Object.assign(document.createElement('input'), {
      id: `${priority.value}`,
      className: 'form__input',
      type: 'radio',
      name: 'priority',
      value: `${priority.value}`,
      checked: priority.value === 'medium' ? true : false
    });

    // Create priority label
    const priorityLabel = Object.assign(document.createElement('label'), {
      for: `${priority.value}`,
      textContent: `${priority.text}`
    });

    // Add legend, input to div
    priorityDiv.append(priorityInput, priorityLabel)
    // Add priority div to fieldset
    priorityFieldset.append(priorityDiv)
  }



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

  /* Create status field */
  const statusField = document.createElement('div');
  statusField.classList.add('form__control');

  // Create status label
  const statusLabel = Object.assign(document.createElement('label'), {
    className: 'form__label',
    for: 'status',
    textContent: 'Status: ',
  });

  // Create status options
  const statusSelect = Object.assign(document.createElement('select'), {
    id: 'status',
    className: 'form__select',
    name: 'status',
  });
  for (const status of statuses) {
    const statusOption = Object.assign(document.createElement('option'), {
      value: `${status.value}`,
      textContent: `${status.text}`,
    });
    statusSelect.appendChild(statusOption);
  }

  // Add label, options to priority field
  statusField.append(statusLabel, statusSelect);

  // Add due date, description, due date, priority, status to form content
  formContent.append(titleField, descriptionField, dueDateField, priorityFieldset, statusField);

  // Add header, form, modal to parent elements
  taskForm.append(formHeader, formContent);
  modal.appendChild(taskForm);
  content.appendChild(modal);

  modal.showModal();
}
