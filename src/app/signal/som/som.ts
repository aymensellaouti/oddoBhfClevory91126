import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-som',
  styleUrl: './som.css',
  templateUrl: './som.html',
})
export class Som {
  x = signal(5);
  y = signal(3);
  names = signal(['arij','bacem'])
  namesLength = computed(()=> this.names().length);
  constructor() {
    // setInterval(() => {
    //   this.addDali();
    // }, 2000)
  }
  addDali() {
    this.names.update(names =>[...names, 'Dali']);
  }
  z = computed(() => this.x() + this.y());
  doubleZ = computed(() => {
    console.log('Nehssreb fi doubleZ fama 7aja tbadlet');

    return 2 * this.z()
  })
}
