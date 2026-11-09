import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from './component/first/first';

@Component({
  imports: [ First],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('oddoBhf091126');
}
