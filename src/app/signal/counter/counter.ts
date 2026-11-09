import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-counter',
  styleUrl: './counter.css',
  templateUrl: './counter.html',
})
export class Counter {
  counter = signal(0);

  increment() {
    this.counter.update(actualValue => actualValue + 1)
  }

  reset() {
    this.counter.set(0);
  }
}
