import { Component } from '@angular/core';
import { HighlightOld } from '../../directives/highlight-old';
import { HighlightNew } from '../../directives/highlight-new';

@Component({
  imports: [HighlightOld, HighlightNew],
  selector: 'app-first',
  styleUrl: './first.css',
  templateUrl: './first.html',
})
export class First {
  message = "Hello Oddo";
  isHidden = false;
  constructor() {
    // setTimeout(() => {
    //   this.isHidden = !this.isHidden
    // }, 3000)
  }

  showHide() {
    this.isHidden = !this.isHidden
  }
}
