import { Directive, HostBinding, HostListener, input, Input, OnInit, signal } from '@angular/core';

@Directive({
  selector: '[appHighlightNew]',
  host: {
    '[style.backgroundColor]':'this.bgc()',
    '(mouseenter)':'this.onMouseEnter()',
    '(mouseleave)':'this.onMouseLeave()',
  }
})
export class HighlightNew implements OnInit{
  ngOnInit(): void {
    this.bgc.set(this.out());
  }

  in = input('yellow');

  out = input('red');

  bgc = signal('');

  onMouseEnter() {
    this.bgc.set(this.in());
  }
  onMouseLeave() {
    this.bgc.set(this.out());
  }
}
