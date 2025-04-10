import { format } from 'date-fns';
import { categories } from './newProject';

// Import images
import blueCircleImg from '../assets/images/icon-blue-circle.svg';
import orangeCircleImg from '../assets/images/icon-orange-circle.svg';
import redCircleImg from '../assets/images/icon-red-circle.svg';
import closeIcon from '../assets/images/icon-close.svg';

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

// Format today's date
const today = format(new Date(), 'yyyy-MM-dd');

export function generateTaskForm({
  formHeading,
  titleValue,
  descriptionValue,
  dueDateValue,
  priorityValue,
  statusValue,
  categoryValue,
  notesValue,
  checklistValue,
}) {
  /* Dialog modal */
  const modal = Object.assign(document.createElement('dialog'), {
    className: 'modal',
  });

  /* Create form */
  const taskForm = Object.assign(document.createElement('form'), {
    className: 'form',
    method: 'dialog',
    noValidate: true,
  });

  /* Create form header */
  const formHeader = Object.assign(document.createElement('header'), {
    className: 'form__header',
  });

  // Create form title
  const formTitle = Object.assign(document.createElement('h2'), {
    className: 'form__title',
    textContent: formHeading,
  });

  // Create paragraph element
  const instruction = Object.assign(document.createElement('p'), {
    textContent: 'Required fields.',
  });
  const asterisk1 = Object.assign(document.createElement('strong'), {
    className: 'form__asterisk',
    textContent: '*',
  });
  // Add asterisk1 to para
  instruction.insertAdjacentElement('afterbegin', asterisk1);

  // Add h2 and para to form header
  formHeader.append(formTitle, instruction);

  /* Form Content */
  const formContent = Object.assign(document.createElement('div'), {
    className: 'form__content',
  });

  /* Create title field */
  const titleField = Object.assign(document.createElement('div'), {
    className: 'form__control',
  });

  // Create title label
  const titleLabel = Object.assign(document.createElement('label'), {
    className: 'form__label',
    htmlFor: 'title',
    textContent: 'Title:',
  });
  const asterisk2 = Object.assign(document.createElement('strong'), {
    className: 'form__asterisk',
    textContent: '*',
  });
  titleLabel.appendChild(asterisk2);

  // Create title input
  const titleInput = Object.assign(document.createElement('input'), {
    id: 'title',
    className: 'form__input',
    type: 'text',
    name: 'title',
    required: true,
    autofocus: true,
    value: titleValue,
  });

  // Add label and input to titleField
  titleField.append(titleLabel, titleInput);

  // Create error div
  const titleError = Object.assign(document.createElement('div'), {
    id: 'title-error',
    className: 'form__error',
  });

  /* Create description field */
  const descriptionField = Object.assign(document.createElement('div'), {
    className: 'form__control',
  });

  // Create description label
  const descriptionLabel = Object.assign(document.createElement('label'), {
    className: 'form__label',
    htmlFor: 'description',
    textContent: 'Description: ',
  });

  // Create description input
  const descriptionInput = Object.assign(document.createElement('input'), {
    id: 'description',
    className: 'form__input',
    type: 'text',
    name: 'description',
    value: descriptionValue,
  });

  // Add label and input to descriptionField
  descriptionField.append(descriptionLabel, descriptionInput);

  /* Create due date field */
  const dueDateField = Object.assign(document.createElement('div'), {
    className: 'form__control',
  });

  // Create due date label
  const dueDateLabel = Object.assign(document.createElement('label'), {
    className: 'form__label',
    htmlFor: 'due-date',
    textContent: 'Due Date:',
  });
  // Create asterisk3
  const asterisk3 = Object.assign(document.createElement('strong'), {
    className: 'form__asterisk',
    textContent: '*',
  });

  // Add asterisk3 to dueDateLabel
  dueDateLabel.appendChild(asterisk3);

  // Create due date input
  const dueDateInput = Object.assign(document.createElement('input'), {
    id: 'due-date',
    className: 'form__input',
    type: 'date',
    name: 'dueDate',
    min: `${today}`,
    required: true,
    value: dueDateValue,
  });

  // Add label and input to dueDateField
  dueDateField.append(dueDateLabel, dueDateInput);

  // Add error div
  const dueDateError = Object.assign(document.createElement('div'), {
    id: 'due-date-error',
    className: 'form__error',
  });

  /* Create priority fieldset */
  const priorityFieldset = Object.assign(document.createElement('fieldset'), {
    className: 'form__control',
  });

  // Create priority legend
  const priorityLegend = Object.assign(document.createElement('legend'), {
    className: 'form__legend',
    textContent: 'Priority: ',
  });

  // Create wrapper for radio buttons
  const priorityWrapper = Object.assign(document.createElement('div'), {
    className: 'form__wrapper',
  });

  // Create  priority radio buttons
  for (const priority of priorities) {
    // Create Priority Div
    const priorityDiv = Object.assign(document.createElement('div'), {
      className: 'form__div',
    });

    // Create priority input
    const priorityInput = Object.assign(document.createElement('input'), {
      id: `${priority.value}`,
      className: 'form__input',
      type: 'radio',
      name: 'priority',
      value: `${priority.value}`,
      checked: priority.value === priorityValue ? true : false,
    });

    // Create priority label
    const priorityLabel = Object.assign(document.createElement('label'), {
      htmlFor: `${priority.value}`,
      textContent: `${priority.text}`,
    });

    // Create color image
    const priorityImage = Object.assign(document.createElement('img'), {
      className: 'form__image',
      src: `${priority.image}`,
      alt: 'pic',
      width: '15',
      height: '15',
    });

    // Add input, label and image to priorityDiv
    priorityDiv.append(priorityInput, priorityLabel, priorityImage);

    // Add priorityDiv to priorityWrapper
    priorityWrapper.appendChild(priorityDiv);

    // Add legend, wrapper to priorityFieldset
    priorityFieldset.append(priorityLegend, priorityWrapper);
  }

  /* Create status field */
  const statusFieldset = Object.assign(document.createElement('fieldset'), {
    className: 'form__control',
  });

  // Create status legend
  const statusLegend = Object.assign(document.createElement('legend'), {
    className: 'form__legend',
    textContent: 'Status: ',
  });

  // Create wrapper for radio buttons
  const statusWrapper = Object.assign(document.createElement('div'), {
    className: 'form__wrapper',
  });

  // Create  status radio buttons
  for (const status of statuses) {
    // Create Status div
    const statusDiv = Object.assign(document.createElement('div'), {
      className: 'form__div',
    });

    // Create status input
    const statusInput = Object.assign(document.createElement('input'), {
      id: `${status.value}`,
      className: 'form__input',
      type: 'radio',
      name: 'status',
      value: `${status.value}`,
      checked: status.value === statusValue ? true : false,
    });

    // Create status label
    const statusLabel = Object.assign(document.createElement('label'), {
      htmlFor: `${status.value}`,
      textContent: `${status.text}`,
    });

    // Add legend and input to statusDiv
    statusDiv.append(statusInput, statusLabel);

    // Add statusDiv to statusWrapper
    statusWrapper.appendChild(statusDiv);

    // Add legend and wrapper to statusFieldset
    statusFieldset.append(statusLegend, statusWrapper);
  }

  /* Create category field */
  const categoryField = Object.assign(document.createElement('div'), {
    className: 'form__control',
  });

  // Create category label
  const categoryLabel = Object.assign(document.createElement('label'), {
    className: 'form__label',
    htmlFor: 'category',
    textContent: 'Category: ',
  });

  // Create category options
  const categorySelect = Object.assign(document.createElement('select'), {
    id: 'category',
    className: 'form__select',
    name: 'category',
  });
  for (const category of categories) {
    const categoryOption = Object.assign(document.createElement('option'), {
      value: `${category.text}`,
      textContent: `${category.text}`,
      selected: category.value === categoryValue ? true : false,
    });
    categorySelect.appendChild(categoryOption);
  }

  // Add label and options to categoryField
  categoryField.append(categoryLabel, categorySelect);

  /* Create notes field */
  const notesField = document.createElement('div');
  notesField.classList.add('form__control');

  // Create notes label
  const notesLabel = Object.assign(document.createElement('label'), {
    className: 'form__label',
    htmlFor: 'notes',
    textContent: 'Notes: ',
  });

  // Create notes input
  const notesTextarea = Object.assign(document.createElement('textarea'), {
    id: 'notes',
    className: 'form__textarea',
    name: 'notes',
    value: notesValue,
  });

  // Add label and input to notesField
  notesField.append(notesLabel, notesTextarea);

  // Add title, description, due date, priority, status, category and notes to Form Content
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
  // Create footer
  const formFooter = Object.assign(document.createElement('footer'), {
    className: 'form__footer',
  });

  // Create cancel button
  const cancelButton = Object.assign(document.createElement('button'), {
    id: 'cancel',
    className: 'button button--cancel',
    type: 'button',
    value: 'cancel',
    textContent: 'Cancel',
  });

  // Create submit button
  const submitButton = Object.assign(document.createElement('button'), {
    id: 'submit',
    className: 'button button--submit',
    type: 'submit',
    value: 'submit',
    textContent: 'Add',
  });

  // Add cancel and submit buttons to footer
  formFooter.append(cancelButton, submitButton);

  // Add Header, Content, Footer to Form
  taskForm.append(formHeader, formContent, formFooter);

  // Add Form, Modal to parent elements
  modal.appendChild(taskForm);
  content.appendChild(modal);

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

export function generateForm({labelValue}) {
  /* Dialog modal */
  const modal = Object.assign(document.createElement('dialog'), {
    className: 'modal modal--small',
  });

  /* Create Form */
  const form = Object.assign(document.createElement('form'), {
    className: 'form',
    method: 'dialog',
  });

  
  // Create title label
  const titleLabel = Object.assign(document.createElement('label'), {
    className: 'form__label',
    htmlFor: 'title',
    textContent: labelValue,
  });

  /* Create container for input and button */
  const inputButtonDiv = Object.assign(document.createElement('div'), {
    className: 'form__div',
  });

  // Create title input
  const titleInput = Object.assign(document.createElement('input'), {
    id: 'title',
    className: 'form__input',
    type: 'text',
    name: 'title',
    required: true,
    autofocus: true,
  });

  // Create Submit button
  const submitButton = Object.assign(document.createElement('button'), {
    id: 'submit',
    className: 'button button--submit',
    type: 'submit',
    value: 'submit',
    textContent: 'Submit',
  });

  // Create close button
  const closeButton = Object.assign(document.createElement('button'), {
    id: 'closeButton',
    className: 'button button--close',
    ariaLabel: 'Close form',
  });

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

  // Add input, submit button to inputButtonDiv
  inputButtonDiv.append(titleInput, submitButton);

  // Add label, inputButtonDiv and closeButton to form
  form.append(titleLabel, inputButtonDiv, closeButton);

  // Add form, modal to parent elements
  modal.appendChild(form);
  content.appendChild(modal);

  modal.showModal();

  return { modal, form, submitButton, closeButton };
}
