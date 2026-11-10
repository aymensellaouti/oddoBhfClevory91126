import { Component, input, output } from '@angular/core';
import { Cv } from '../model/cv';
import { CvItem } from '../cv-item/cv-item';

@Component({
  imports: [CvItem],
  selector: 'app-cv-list',
  styleUrl: './cv-list.css',
  templateUrl: './cv-list.html',
})
export class CvList {
  cvs = input<Cv[]>([]);
  forwardCv = output<Cv>()
}
