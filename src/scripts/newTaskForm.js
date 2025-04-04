/* Show Form when user clicks Add Task button */

import { generateForm } from "./formUtils";
export function showNewTaskForm() {

  const {
    modal,
    taskForm,
    titleInput,
    dueDateInput,
    titleError,
    dueDateError,
    cancelButton,
  } = generateForm({formHeading: 'New Task', titleValue: "", descriptionValue: "", dueDateValue: "", priorityValue: "medium", statusValue: "incomplete", categoryValue: "inbox", notesValue: ""});
  

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
