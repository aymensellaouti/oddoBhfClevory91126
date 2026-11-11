import { Component } from "@angular/core";
import { Cv } from "../model/cv";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent {
  cv: Cv | null = null;

  constructor() {}
}
