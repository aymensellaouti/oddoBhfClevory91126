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
export const routes: Routes = [
  {path: '', component: First},
  {path: 'cv', component: CvPage},
  {path: 'cv/:id', component: DetailsCvComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'weektodo', component: WeekTodoComponent},
  {path: 'color', component: Color},
  {path: 'word', component: MiniWordComponent},
  // AY route fiha segment wahed hezha el Hello
  {path: 'hello/:name', component: Hello},

];
