import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from './component/first/first';
import { Color } from './component/color/color';

@Component({
  imports: [First, Color],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('oddoBhf091126');
}
