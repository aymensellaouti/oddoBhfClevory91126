import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-color',
  styleUrl: './color.css',
  templateUrl: './color.html',
})
export class Color {
  defaultColor = 'red'
  // L'état : el 7ajet eli tetbadel ou dynamique fel vue
  color = this.defaultColor;

  changeColor(newColor: HTMLInputElement) {
    this.color = newColor.value;
    newColor.value = ''
  }

  reset() {
    this.color = this.defaultColor;
  }
}
