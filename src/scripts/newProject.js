
const newProjectDiv = document.querySelector('.new-project');

export let categories = []

export function showNewProjectForm() {
  /* Create Form */
  const projectForm = Object.assign(document.createElement('form'), {
    className: 'form new-project__form',
    method: 'dialog',
    // noValidate: true,
  });

  /* Create Title field */
  const titleField = Object.assign(document.createElement('div'), {
    className: 'form__control new-project__form-control',
  });

  // Create Title Input
  const titleInput = Object.assign(document.createElement('input'), {
    id: 'title',
    className: 'form__input new-project__form-input',
    type: 'text',
    name: 'title',
    required: true,
    autofocus: true,
    // value: titleValue,
  });

  // Create Submit button
  const submitButton = Object.assign(document.createElement('button'), {
    id: 'submit',
    className: 'button button--submit',
    type: 'submit',
    value: 'submit',
    textContent: 'Add',
  });

  // Add Input, Submit button to Title field
  titleField.append(titleInput, submitButton);

  // Add Title Field to Project Form
  projectForm.appendChild(titleField)

  // Add Project Form to New Project Div
  newProjectDiv.appendChild(projectForm)
}
