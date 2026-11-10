import { Directive, signal } from '@angular/core';

@Directive({
  selector: 'input[appRainbow][type=text]',
  host: {
    // chneya bech nbindi que ce soit property walla event
    '[style.color]':'this.color()',
    '[style.borderColor]':'this.borderColor()',
    '(keyup)': 'this.changeColor()'
  }
})
export class Rainbow {
  // Chneya el state mta3i
  color = signal('red');
  borderColor = signal('green');
  constructor() {
    console.log('AppRainbow');
  }
  private getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }

  // chneya el comportement
  changeColor() {
    this.color.set(this.getRandomColor());
    this.borderColor.set(this.getRandomColor());
  }
}
