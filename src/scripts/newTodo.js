// class to create a new to-do object
export class NewTask {
  constructor({ title, description = "", dueDate, priority = "medium", status = "incomplete", category = "inbox", notes = "", checklist = false }) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.status = status
    this.category = category
    this.notes = notes
    this.checklist = checklist
    this.id = Date.now()
  }
}

const todo = new NewTask({ title: 'get milk', dueDate: '03-28-25', priority: 'high', notes: 'check the date before buying' })
// console.log(todo);