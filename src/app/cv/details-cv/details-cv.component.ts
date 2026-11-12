import { Component, computed, effect, inject, input, OnInit, signal } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { DefaultImagePipe } from "../../pipes/default-image-pipe";
import { Router } from "@angular/router";
import { APP_ROUTES } from "../../config/routes.config";
import { AuthService } from "../../auth/services/auth-service";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
  imports: [DefaultImagePipe],
})
export class DetailsCvComponent implements OnInit{
  cvService = inject(CvService);
  authService = inject(AuthService);
  id = input.required<number>();
  //cv = computed(() => this.cvService.findCvById(this.id()));
  cv = signal<Cv | null>(null)
  router = inject(Router);
  // notFoundEffect = effect(() => {
  //   if (!this.cv()) {
  //     this.router.navigate([APP_ROUTES.cv]);
  //   }
  // });
  constructor() {

  }
  ngOnInit(): void {
        this.cvService.getCvByIdFromApi(this.id()).subscribe({
          next: cv => this.cv.set(cv),
          error: (e) => {
            this.router.navigate([APP_ROUTES.cv]);
          }
        });
  }
  delete() {
    const cv = this.cv();
    if (cv) {
      this.cvService.deleteCvByIdFromApi(cv.id).subscribe({
        next: () => {
          this.router.navigate([APP_ROUTES.cv]);
        },
        error: e => console.log({e})
      });
    }
  }
}
