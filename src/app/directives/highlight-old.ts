import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightOld]',
})
export class HighlightOld implements OnInit{
  ngOnInit(): void {
    this.bgc = this.out;
  }
  @Input()
  in = 'yellow';
  @Input()
  out = 'red';

  @HostBinding('style.backgroundColor')
  bgc = this.out;

  @HostListener('mouseenter') onMouseEnter() {
    this.bgc = this.in;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgc = this.out;
  }
}
