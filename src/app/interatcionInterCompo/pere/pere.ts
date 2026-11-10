import { Component } from '@angular/core';
import { Fils } from '../fils/fils';

@Component({
  imports: [Fils],
  selector: 'app-pere',
  styleUrl: './pere.css',
  templateUrl: './pere.html',
})
export class Pere {
  handleSonMessage(message: string) {
    alert(message);
  }
}
