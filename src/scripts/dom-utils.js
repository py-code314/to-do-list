/* CREATE DOM ELEMENTS */

/* Creates a container element */
export const createContainer = (parent, name, id, className) => {
  const element = document.createElement(name);
  if (id !== undefined && id !== '') {
    element.id = id;
  }
  element.className = className;
  parent.appendChild(element);
  return element;
};

/* Creates a label element */
export const createLabel = (parent, className = '', htmlFor, text) => {
  const label = document.createElement('label');
  if (className !== undefined && className !== '') {
    label.className = className;
  }
  label.htmlFor = htmlFor;
  label.textContent = text;
  parent.appendChild(label);
  return label;
};

/* Creates an input element */
export const createInput = (parent, id, className, type, name, value) => {
  const input = document.createElement('input');
  input.id = id;
  input.className = className;
  input.type = type;
  input.name = name;
  input.value = value;
  parent.appendChild(input);
  return input;
};

/* Creates an asterisk element */
export const createAsterisk = (parent) => {
  const asterisk = document.createElement('strong');
  asterisk.className = 'form__asterisk';
  asterisk.textContent = '*';
  parent.appendChild(asterisk);
  return asterisk;
};

/* Creates a legend element */
export const createLegend = (parent, className, text) => {
  const legend = document.createElement('legend');
  legend.className = className;
  legend.textContent = text;
  parent.appendChild(legend);
  return legend;
};

/* Creates a button element */
export const createButton = (parent, id, className, type, value, text) => {
  const button = document.createElement('button');
  button.id = id;
  button.className = className;
  button.type = type;
  button.value = value;
  button.textContent = text;
  parent.appendChild(button);
  return button;
};

/* Creates an image element */
export const createImage = (
  parent,
  className,
  src,
  alt,
  width,
  height,
  title
) => {
  const image = document.createElement('img');
  image.className = className;
  image.src = src;
  image.alt = alt;
  image.width = width;
  image.height = height;
  image.title = title;
  parent.appendChild(image);
  return image;
};

/* Creates a p element */
export const createParagraph = (parent, className, text) => {
  const paragraph = document.createElement('p');
  paragraph.className = className;
  paragraph.textContent = text;
  parent.appendChild(paragraph);
  return paragraph;
};

/* Creates a <time> element and appends it to the given parent element */
export const createTime = (parent, className, text, dateTime) => {
  const time = document.createElement('time');
  time.className = className;
  time.textContent = text;
  time.dateTime = dateTime;
  parent.appendChild(time);
  return time;
};
