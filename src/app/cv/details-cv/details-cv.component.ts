import { Component, computed, effect, inject, input } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { DefaultImagePipe } from "../../pipes/default-image-pipe";
import { Router } from "@angular/router";
import { APP_ROUTES } from "../../config/routes.config";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
  imports: [DefaultImagePipe],
})
export class DetailsCvComponent {
  cvService = inject(CvService);
  id = input.required<number>();
  cv = computed(() => this.cvService.findCvById(this.id()));
  router = inject(Router);
  notFoundEffect = effect(() => {
    if (!this.cv()) {
      this.router.navigate([APP_ROUTES.cv]);
    }
  });

  delete() {
    const cv = this.cv();
    if (cv) {
      this.cvService.deleteCv(cv);
      this.router.navigate([APP_ROUTES.cv]);
    }
  }
}
