import { Component, inject, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { CvList } from '../cv-list/cv-list';
import { CvCard } from '../cv-card/cv-card';
import { LoggerService } from '../../services/logger.Service';
import { SayHelloService } from '../../services/say-hello.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { EmbaucheComponent } from '../embauche/embauche.component';
import { rxResource } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';

@Component({
  imports: [CvList, CvCard, EmbaucheComponent],
  selector: 'app-cv-page',
  styleUrl: './cv-page.css',
  templateUrl: './cv-page.html',
})
export class CvPage {
  cvService = inject(CvService)
  // cvs = signal<Cv[]>([]);
  // isLoading = signal(true);
  cvsResources = rxResource({
    stream: () => this.cvService.getCvsFromApi().pipe(
      catchError(e => {
        const fakeCvs = this.cvService.getCvs();
        this.toastr.error("Les données sont fictives veuillez contacter l'admin");
        return of(fakeCvs());
      })
    ),
    defaultValue: []
  })
  toastr = inject(ToastrService);
  selectedCv = this.cvService.getSelectedCv();
  loggerService = inject(LoggerService);
  //sayHelloService = new SayHelloService();
  constructor(private sayHelloService: SayHelloService) {
    this.loggerService.log('cc je suis le cvComponent');
    this.sayHelloService.hello();
    this.toastr.info('Bienvenu dans notre CvTech')
    // Old way
    // this.cvService.getCvsFromApi().subscribe({
    //   next: (cvs) => {
    //     this.isLoading.set(false);
    //     this.cvs.set(cvs);
    //   },
    //   error: () => {
    //     const fakeCvs = this.cvService.getCvs();
    //     this.cvs.set(fakeCvs());
    //     this.toastr.error("Les données sont fictives veuillez contacter l'admin")
    //   }
    // })
  }
}
