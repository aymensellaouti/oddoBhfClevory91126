import { Routes } from '@angular/router';
import { Observable } from 'rxjs';

import { CvPage } from './cv/cv-page/cv-page';

import { authGuard } from './auth/guards/auth-guard';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./component/first/first').then((m) => m.First) },
  { path: 'login', loadComponent: () => import('./auth/login/login').then((m) => m.Login) },
  {
    path: 'cv',
    loadComponent: () =>
      import('./cv/cv-page/cv-page').then((moduleDansLeSensJs) => moduleDansLeSensJs.CvPage),
  },
  {
    path: 'cv/add',
    loadComponent: () => import('./cv/add-cv/add-cv.component').then((m) => m.AddCvComponent),
    canActivate: [authGuard],
  },
  {
    path: 'cv/:id',
    loadComponent: () =>
      import('./cv/details-cv/details-cv.component').then((m) => m.DetailsCvComponent),
  },
  {
    path: 'todo',
    loadComponent: () => import('./todo/todo/todo.component').then((m) => m.TodoComponent),
  },
  {
    path: 'singletodo',
    loadComponent: () => import('./todo/single-todo/single-todo').then((m) => m.SingleTodo),
  },
  {
    path: 'weektodo',
    loadComponent: () =>
      import('./todo/week-todo/week-todo.component').then((m) => m.WeekTodoComponent),
  },
  { path: 'color', loadComponent: () => import('./component/color/color').then((m) => m.Color) },
  {
    path: 'word',
    loadComponent: () =>
      import('./directives/mini-word/mini-word.component').then((m) => m.MiniWordComponent),
  },
  // AY route fiha segment wahed hezha el Hello
  {
    path: 'hello/:name',
    loadComponent: () => import('./component/hello/hello').then((m) => m.Hello),
  },
  { path: '**', loadComponent: () => import('./component/nf404/nf404').then((m) => m.Nf404) },
];
