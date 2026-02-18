import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo, TodoStatus } from '../../../shared/todo'; 

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
    templateUrl: './todo-list.html',
    styleUrls: ['./todo-list.scss']
})
export class TodoListComponent {
  todos: Todo[] = [
    {
      id: crypto.randomUUID(),
      title: 'Linux',
      date: new Date('2026-02-19'),
      status: TodoStatus.NotDone
    },
    {
      id: crypto.randomUUID(),
      title: 'Angular',
      date: new Date('2026-02-18'),
      status: TodoStatus.InProgress
    },
    {
      id: crypto.randomUUID(),
      title: 'Python Test',
      date: new Date('2026-02-18'),
      status: TodoStatus.Done
    }
  ];
  TodoStatus = TodoStatus;
  isPastDue(date: Date): boolean {
  return date < new Date();
}
  updateStatus(todo: Todo, status: TodoStatus): void {
  todo.status = status;
}
  edited: Todo | undefined;

openEdit(todo: Todo): void {
  this.edited = todo;
  this.edited.date = new Date(this.edited.date);
}

closeEdit(): void {
  this.edited = undefined;
}
newTitle: string = '';
newDate: string = '';

addTodo(): void {
  const todo: Todo = {
    id: crypto.randomUUID(),
    title: this.newTitle,
    date: new Date(this.newDate),
    status: TodoStatus.NotDone
  };
  this.todos.push(todo);
  this.newTitle = '';
  this.newDate = '';
}
}
  