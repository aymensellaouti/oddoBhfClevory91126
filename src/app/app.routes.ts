import { Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { First } from './component/first/first';
import { CvPage } from './cv/cv-page/cv-page';
import { TodoComponent } from './todo/todo/todo.component';
import { Color } from './component/color/color';
import { WeekTodoComponent } from './todo/week-todo/week-todo.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { Hello } from './component/hello/hello';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { Nf404 } from './component/nf404/nf404';
import { Login } from './auth/login/login';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { authGuard } from './auth/guards/auth-guard';
import { SingleTodo } from './todo/single-todo/single-todo';
export const routes: Routes = [
  {path: '', component: First},
  {path: 'login', component: Login},
  {path: 'cv', component: CvPage},
  {path: 'cv/add', component: AddCvComponent, canActivate: [authGuard]},
  {path: 'cv/:id', component: DetailsCvComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'singletodo', component: SingleTodo},
  {path: 'weektodo', component: WeekTodoComponent},
  {path: 'color', component: Color},
  {path: 'word', component: MiniWordComponent},
  // AY route fiha segment wahed hezha el Hello
  {path: 'hello/:name', component: Hello},
  {path: '**', component: Nf404},

];
