import { inject, Injectable, Signal, signal, WritableSignal } from "@angular/core";
import { Todo } from "../model/todo";
import { LoggerService } from "../../services/logger.Service";
import { HttpClient, httpResource } from "@angular/common/http";
import { APP_API } from "../../config/api.config";

export interface TodoApi {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}


@Injectable({
  providedIn: 'root',
})
export class TodoService {
  #todos = signal<Todo[]>([]);
  loggerService = inject(LoggerService);
  todos = this.#todos.asReadonly();
  httpClient = inject(HttpClient);
  //todosResource = httpResource(() => APP_API.todos)

  getTodoResource(id: WritableSignal<number>) {
    return httpResource<TodoApi|null>(() => APP_API.todos + id(), {defaultValue: null})
  }
  /**
   * elle retourne la liste des todos
   *
   * @returns Todo[]
   */
  getTodos(): Signal<Todo[]> {
    return this.todos;
  }

  /**
   *Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {
    this.#todos.update(todos => [...todos, todo]);
  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(todo: Todo): void {
    return this.#todos.update((todos) => todos.filter(todoE => todoE!= todo));;
  }

  /**
   * Logger la liste des todos
   * @returns void
   */
  logTodos() {
    this.loggerService.log(this.todos())
  }

  getTodoApiList() {
    return this.httpClient.get<TodoApi[]>(APP_API.todos);
  }
}
