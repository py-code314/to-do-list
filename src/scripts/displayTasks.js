import { tasks } from './formData';

const { parseISO, format } = require('date-fns');

export function displayTasks() {
  const content = document.querySelector('#content');

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

    // Create Check box
    const taskStatus = Object.assign(document.createElement('input'), {
      id: 'status',
      className: 'form__input',
      type: 'checkbox',
      name: 'status',
      checked: task.status === 'completed' ? true : false
    });


    // Create Title
    const taskTitle = Object.assign(document.createElement('h2'), {
      className: 'task__title',
      textContent: `${task.title}`,
    });

    // Create Description
    const taskDescription = Object.assign(document.createElement('p'), {
      className: 'task__description',
      textContent: `${task.description}`,
    });

    // Parse Due Date
    const parsedDate = parseISO(task.dueDate)
    
    // Create Date
    const taskDueDate = Object.assign(document.createElement('p'), {
      className: 'task__due-date',
      textContent: format(parsedDate, 'MM/dd/yyyy'),
    });

    // Create Category
    const taskCategory = Object.assign(document.createElement('p'), {
      className: 'task__category',
      textContent: `${task.category}`,
    });

    // Create Notes
    const taskNotes = Object.assign(document.createElement('p'), {
      className: 'task__notes',
      textContent: `${task.notes}`,
    });

    // Add Title, Description, Date, Category and Notes to Task Div
    taskDiv.append(
      taskStatus,
      taskTitle,
      taskDescription,
      taskDueDate,
      taskCategory,
      taskNotes
    );

    // Add Task Div to Tasks Container
    tasksContainer.appendChild(taskDiv);
  });
}
