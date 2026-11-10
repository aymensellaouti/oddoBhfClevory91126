import { Component, inject, input } from '@angular/core';
import { Cv } from '../model/cv';
import { DefaultImagePipe } from '../../pipes/default-image-pipe';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  imports: [DefaultImagePipe],
  selector: 'app-cv-card',
  styleUrl: './cv-card.css',
  templateUrl: './cv-card.html',
})
export class CvCard {
  cv = input<Cv | null>(null);
  embaucheService = inject(EmbaucheService);
  toastr = inject(ToastrService);

  embuacher() {
    const cv = this.cv();
    if (cv) {
      if(this.embaucheService.embaucher(cv)) {
        this.toastr.success(`Le cv de ${cv.name} est sélectionné`)
      } else {
        this.toastr.warning(`Le cv de ${cv.name} est déjà sélectionné`)
      }
    }
  }
}
