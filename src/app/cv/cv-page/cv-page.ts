import { Component, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { CvList } from '../cv-list/cv-list';
import { CvCard } from '../cv-card/cv-card';

@Component({
  imports: [CvList, CvCard],
  selector: 'app-cv-page',
  styleUrl: './cv-page.css',
  templateUrl: './cv-page.html',
})
export class CvPage {
  cvs = signal<Cv[]>([
    new Cv(1, 'sellaouti', 'aymen', 'teacher', '12324', 'rotating_card_profile2.png', 44),
    new Cv(2, 'sellaouti', 'skander', 'student', '4444', 'rotating_card_profile3.png', 8),
    new Cv(3, 'Lamsi', 'Arij', 'Dev', '4444', 'rotating_card_profile.png', 20),
    new Cv(4, 'Masmoudi', 'Bacem', 'Dev', '4444', 'rotating_card_profile3.png', 20),
    new Cv(5, 'Znidi', 'Mohamed Ali', 'Dev', '4444', 'rotating_card_profile2.png', 20),
  ]);
  selectedCv = signal<Cv | null>(null);
}
