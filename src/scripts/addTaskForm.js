// show form when user clicks Add Task button

import closeIcon from '../assets/images/icon-close.svg'

const content = document.querySelector('#content');

export function showNewTaskForm() {
  console.log('show modal');
  // Dialog modal
  const modal = document.createElement('dialog');
  modal.classList.add('modal');

  // Create form
  // const form = document.createElement('form');
  // form.classList.add('form');
  // form.method = 'dialog';
  const form = Object.assign(document.createElement('form'), {
    className: 'form',
    method: 'dialog'
  });

  // Create form header
  const header = document.createElement('header');
  header.classList.add('form__header');

  // Create form title
  const h2 = document.createElement('h2');

  // Create close button
  const closeButton = Object.assign(document.createElement('button'), {
    id: 'closeButton',
    className: 'button button--close',
    type: 'button',
    value: 'close',
  });

  // Create image element
  const image = Object.assign(document.createElement('img'), {   
    className: 'form__image',
    src: `${closeIcon}`,
    alt: 'Close',
    title: 'Close'
  });
  closeButton.appendChild(image)

  // Create paragraph element
  const para = document.createElement('p');
  para.textContent = 'Required fields.';
  const strong = document.createElement('strong');
  strong.textContent = '*'
  para.appendChild(strong)
  
  // Add h2, button, para to form header
  header.append(h2, closeButton, para)

  //TODO: change variable names

  form.appendChild(header)
  modal.appendChild(form)
  content.appendChild(modal)

  console.log('modal created');
  modal.showModal()

}
