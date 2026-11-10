import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '../../../../node_modules/@angular/common/types/_common_module-chunk';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css'],
  imports: [FormsModule],
})
export class MiniWordComponent {
  // 1 On définit le state
  color = signal('red');
  size = signal(75);
  font = signal('garamond')
}
