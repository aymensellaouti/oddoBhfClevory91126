import { Component, inject, signal } from "@angular/core";
import { Todo } from "../model/todo";
import { TodoApi, TodoService } from "../service/todo.service";
import { FormsModule } from "@angular/forms";
import { AsyncPipe, JsonPipe } from "@angular/common";
import { tap, timer } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [FormsModule, JsonPipe, AsyncPipe],
  providers: [TodoService],
})
export class TodoComponent {
  todoService = inject(TodoService);
  todosApi = signal<TodoApi[]>([]);
  todo = signal(new Todo());
  todos = this.todoService.getTodos();
  timer$ = timer(0, 2000).pipe(tap(data => console.log({data})));
  //todosApi$ = this.todoService.getTodoApiList();
  constructor() {
    this.todoService.getTodoApiList().subscribe({
      next: (todos) => (this.todosApi.set(todos)),
    });
    // this.timer$.pipe(takeUntilDestroyed()).subscribe({
    //   next: (data) => console.log(data),
    // });
  }
  addTodo() {
    this.todoService.addTodo(this.todo());
    this.todo.set(new Todo());
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
