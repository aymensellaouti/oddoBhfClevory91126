import { Component, inject, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { CvList } from '../cv-list/cv-list';
import { CvCard } from '../cv-card/cv-card';
import { LoggerService } from '../../services/logger.Service';
import { SayHelloService } from '../../services/say-hello.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { EmbaucheComponent } from '../embauche/embauche.component';

@Component({
  imports: [CvList, CvCard, EmbaucheComponent],
  selector: 'app-cv-page',
  styleUrl: './cv-page.css',
  templateUrl: './cv-page.html',
})
export class CvPage {
  cvService = inject(CvService)
  cvs = this.cvService.getCvs();
  toastr = inject(ToastrService);
  selectedCv = this.cvService.getSelectedCv();
  loggerService = inject(LoggerService);
  //sayHelloService = new SayHelloService();
  constructor(private sayHelloService: SayHelloService) {
    this.loggerService.log('cc je suis le cvComponent');
    this.sayHelloService.hello();
    this.toastr.info('Bienvenu dans notre CvTech')
  }
}
