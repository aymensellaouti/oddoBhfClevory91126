import { Component, inject, input, output } from '@angular/core';
import { Cv } from '../model/cv';
import { DefaultImagePipe } from '../../pipes/default-image-pipe';
import { CvService } from '../services/cv.service';

@Component({
  imports: [DefaultImagePipe],
  selector: 'app-cv-item',
  styleUrl: './cv-item.css',
  templateUrl: './cv-item.html',
})
export class CvItem {
  // State
  cv = input.required<Cv>();
  cvService = inject(CvService);
  size = input(50);
  // selectCv = output<Cv>();

  onSelectCv() {
    this.cvService.selectCv(this.cv());
  }
}
