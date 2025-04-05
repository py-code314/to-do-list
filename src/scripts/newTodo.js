// class to create a new to-do object
// Convert task id to int because Edit Task id is a string
// Default id for New Task is a number
export class NewTask {
  constructor({ title, description, dueDate, priority, status, category, notes, checklist = false, id = Date.now() }) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.status = status
    this.category = category
    this.notes = notes
    this.checklist = checklist
    this.id = parseInt(id)
  }
}

// const todo = new NewTask({ title: 'get milk', dueDate: '03-28-25', priority: 'high', notes: 'check the date before buying' })
// console.log(todo);