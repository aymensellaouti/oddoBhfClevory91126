import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from './component/first/first';
import { Color } from './component/color/color';
import { RotatingCard } from './component/rotating-card/rotating-card';
import { Counter } from './signal/counter/counter';
import { Som } from './signal/som/som';
import { TtcComponent } from './signal/ttc/ttc.component';
import { Pere } from './interatcionInterCompo/pere/pere';

@Component({
  imports: [First, Color, RotatingCard, Counter, Som, TtcComponent, Pere],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('oddoBhf091126');
}
