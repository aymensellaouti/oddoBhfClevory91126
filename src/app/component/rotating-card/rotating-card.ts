import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-rotating-card',
  styleUrl: './rotating-card.css',
  templateUrl: './rotating-card.html',
})
export class RotatingCard {
  // state

  name = 'sellaouti';
  firstname = 'aymen';
  path = 'rotating_card_profile3.png';
  job = "enseignant"
}
