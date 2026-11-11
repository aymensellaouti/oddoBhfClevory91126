import { Component, inject, signal } from "@angular/core";
import { Todo } from "../model/todo";
import { TodoService } from "../service/todo.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [FormsModule],
  providers:[TodoService]

})
export class TodoComponent {
  todoService = inject(TodoService);
  todo = signal(new Todo());
  todos = this.todoService.getTodos();

  addTodo() {
    this.todoService.addTodo(this.todo());
    this.todo.set(new Todo());
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
