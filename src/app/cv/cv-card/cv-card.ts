import { Component, input } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  imports: [],
  selector: 'app-cv-card',
  styleUrl: './cv-card.css',
  templateUrl: './cv-card.html',
})
export class CvCard {
  cv = input<Cv | null>(null);
}
