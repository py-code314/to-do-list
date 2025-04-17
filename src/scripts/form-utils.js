// Import data and functions
import { categories } from './new-project';
import { format } from 'date-fns';
import {
  createContainer,
  createLegend,
  createLabel,
  createInput,
  createAsterisk,
  createButton,
  createImage,
} from './dom-utils';

// Import images
import blueCircleImg from '../assets/images/icon-blue-circle.svg';
import orangeCircleImg from '../assets/images/icon-orange-circle.svg';
import redCircleImg from '../assets/images/icon-red-circle.svg';
import closeIcon from '../assets/images/icon-close.svg';

// Import elements from DOM
const content = document.querySelector('#content');

// Priorities array
const priorities = [
  { value: 'low', text: 'Low', image: blueCircleImg },
  { value: 'medium', text: 'Medium', image: orangeCircleImg },
  { value: 'high', text: 'High', image: redCircleImg },
];

// Statuses array
const statuses = [
  { value: 'incomplete', text: 'Incomplete' },
  { value: 'complete', text: 'Complete' },
];

// Format today's date
const today = format(new Date(), 'yyyy-MM-dd');

/* Generate a form for creating a new task or editing an existing task */
export function generateTaskForm({
  formHeading,
  titleValue,
  descriptionValue,
  dueDateValue,
  priorityValue,
  statusValue,
  categoryValue,
  notesValue,
}) {
  // Create dialog modal
  const modal = createContainer(content, 'dialog', 'modal', 'modal');

  // Create form
  const taskForm = document.createElement('form');
  taskForm.className = 'form';
  taskForm.method = 'dialog';
  taskForm.noValidate = true;

  // Create form header and content
  const formHeader = createContainer(taskForm, 'header', '', 'form__header');

  const formTitle = document.createElement('h2');
  formTitle.className = 'form__title';
  formTitle.textContent = formHeading;

  const instruction = document.createElement('p');
  instruction.textContent = 'Required fields.';

  const asterisk1 = document.createElement('strong');
  asterisk1.className = 'form__asterisk';
  asterisk1.textContent = '*';
  instruction.insertAdjacentElement('afterbegin', asterisk1);

  formHeader.append(formTitle, instruction);

  // Create form content
  const formContent = createContainer(taskForm, 'div', '', 'form__content');

  // Create title field and elements inside
  const titleField = createContainer(formContent, 'div', '', 'form__control');

  const titleLabel = createLabel(titleField, 'form__label', 'title', 'Title: ');
  const asterisk2 = createAsterisk(titleLabel);

  const titleInput = createInput(
    titleField,
    'title',
    'form__input',
    'text',
    'title',
    titleValue
  );

  titleInput.required = true;
  titleInput.autofocus = true;

  // Create error div
  const titleError = createContainer(
    formContent,
    'div',
    'title-error',
    'form__error'
  );

  // Create description field and elements inside
  const descriptionField = createContainer(
    formContent,
    'div',
    '',
    'form__control'
  );

  const descriptionLabel = createLabel(
    descriptionField,
    'form__label',
    'description',
    'Description: '
  );

  const descriptionInput = createInput(
    descriptionField,
    'description',
    'form__input',
    'text',
    'description',
    descriptionValue
  );

  // Create due date field and elements inside
  const dueDateField = createContainer(formContent, 'div', '', 'form__control');

  const dueDateLabel = createLabel(
    dueDateField,
    'form__label',
    'due-date',
    'Due Date: '
  );

  const asterisk3 = createAsterisk(dueDateLabel);

  const dueDateInput = createInput(
    dueDateField,
    'due-date',
    'form__input',
    'date',
    'dueDate',
    dueDateValue || `${today}`
  );
  dueDateInput.required = true;

  // Create error div
  const dueDateError = createContainer(
    formContent,
    'div',
    'due-date-error',
    'form__error'
  );

  // Create priority field and elements inside
  const priorityFieldset = createContainer(
    formContent,
    'fieldset',
    '',
    'form__control'
  );

  const priorityLegend = createLabel(
    priorityFieldset,
    'form__legend',
    '',
    'Priority: '
  );

  const priorityWrapper = createContainer(
    priorityFieldset,
    'div',
    '',
    'form__wrapper'
  );

  for (const priority of priorities) {
    const priorityDiv = createContainer(
      priorityWrapper,
      'div',
      '',
      'form__div'
    );

    const priorityInput = createInput(
      priorityDiv,
      `${priority.value}`,
      'form__input form__input--radio',
      'radio',
      'priority',
      `${priority.value}`
    );
    priorityInput.checked = priority.value === priorityValue ? true : false;

    const priorityLabel = createLabel(
      priorityDiv,
      '',
      `${priority.value}`,
      `${priority.text}`
    );

    const priorityImage = createImage(
      priorityDiv,
      'form__image',
      `${priority.image}`,
      'pic',
      '17',
      '17',
      `${priority.text}`
    );
  }

  // Create status field and elements inside
  const statusFieldset = createContainer(
    formContent,
    'fieldset',
    '',
    'form__control'
  );

  const statusLegend = createLegend(statusFieldset, 'form__legend', 'Status: ');

  const statusWrapper = createContainer(
    statusFieldset,
    'div',
    '',
    'form__wrapper'
  );

  for (const status of statuses) {
    const statusDiv = createContainer(statusWrapper, 'div', '', 'form__div');

    const statusInput = createInput(
      statusDiv,
      `${status.value}`,
      'form__input form__input--radio',
      'radio',
      'status',
      `${status.value}`
    );
    statusInput.checked = status.value === statusValue ? true : false;

    const statusLabel = createLabel(
      statusDiv,
      '',
      `${status.value}`,
      `${status.text}`
    );
  }

  // Create category field and elements inside
  const categoryField = createContainer(
    formContent,
    'div',
    '',
    'form__control'
  );

  const categoryLabel = createLabel(
    categoryField,
    'form__label',
    'category',
    'Category: '
  );

  const categorySelect = document.createElement('select');
  categorySelect.id = 'category';
  categorySelect.className = 'form__select';
  categorySelect.name = 'category';
  for (const category of categories) {
    const categoryOption = document.createElement('option');
    categoryOption.value = `${category.text}`;
    categoryOption.textContent = `${category.text}`;
    categoryOption.selected = category.value === categoryValue ? true : false;
    categorySelect.appendChild(categoryOption);
  }

  categoryField.appendChild(categorySelect);

  // Create notes field and elements inside
  const notesField = createContainer(formContent, 'div', '', 'form__control');

  const notesLabel = createLabel(notesField, 'form__label', 'notes', 'Notes: ');

  const notesTextarea = document.createElement('textarea');
  notesTextarea.id = 'notes';
  notesTextarea.className = 'form__textarea';
  notesTextarea.name = 'notes';
  notesTextarea.value = notesValue;

  notesField.appendChild(notesTextarea);

  // Create form footer and buttons inside

  const formFooter = createContainer(formContent, 'footer', '', 'form__footer');

  const cancelButton = createButton(
    formFooter,
    'cancel',
    'button button--cancel',
    'button',
    'cancel',
    'Cancel'
  );
  const submitButton = createButton(
    formFooter,
    'submit',
    'button button--submit',
    'submit',
    'submit',
    'Add'
  );

  modal.appendChild(taskForm);
  content.appendChild(modal);

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

export function generateForm({ labelValue }) {
  // Create modal
  const modal = createContainer(
    content,
    'dialog',
    'modal',
    'modal modal--small'
  );

  // Create form
  const form = document.createElement('form');
  form.className = 'form';
  form.method = 'dialog';

  // Create title label
  const titleLabel = createLabel(form, 'form__label', 'title', labelValue);

  // Create input and button div
  const inputButtonDiv = createContainer(form, 'div', '', 'form__div');

  // Create title input
  const titleInput = createInput(
    inputButtonDiv,
    'title',
    'form__input',
    'text',
    'title',
    ''
  );
  titleInput.required = true;
  titleInput.autofocus = true;

  // Create Submit button
  const submitButton = createButton(
    inputButtonDiv,
    'submit',
    'button button--submit',
    'submit',
    'submit',
    'Submit'
  );

  // Create close button
  const closeButton = createButton(
    form,
    'closeButton',
    'button button--close',
    'button',
    'close',
    ''
  );
  closeButton.ariaLabel = 'Close form';

  // Create close image
  const closeImage = createImage(
    closeButton,
    'task__image',
    `${closeIcon}`,
    '',
    '28',
    '28',
    'Close'
  );

  modal.appendChild(form);
  modal.showModal();

  return { modal, form, submitButton, closeButton };
}
