import { Component, input, output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  imports: [],
  selector: 'app-cv-item',
  styleUrl: './cv-item.css',
  templateUrl: './cv-item.html',
})
export class CvItem {
  // State
  cv = input.required<Cv>();

  selectCv = output<Cv>();

  onSelectCv() {
    this.selectCv.emit(this.cv());
  }
}
