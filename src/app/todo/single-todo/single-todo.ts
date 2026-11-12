import { Component, inject, signal } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
  imports: [],
  selector: 'app-single-todo',
  styleUrl: './single-todo.css',
  templateUrl: './single-todo.html',
})
export class SingleTodo {
  todoService = inject(TodoService);
  id = signal(1);
  todoResource = this.todoService.getTodoResource(this.id);
}
