import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appResize]'
})
export class ResizeDirective {


  @Input() appResize;

  constructor(private el: ElementRef) {

  }

  @HostListener('mouseenter') onmouseenter() {

    this.setSize(this.appResize);
    this.setColor('green');
    this.setBorder('10px solid red');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.setSize(20);
    this.setColor('');
    this.setBorder('');
    this.el.nativeElement.value = '';
  }

  setSize(newsize) {
    this.el.nativeElement.size = newsize;

  }
  setColor(newcolor) {
    this.el.nativeElement.style.backgroundColor = newcolor;
  }
  setBorder(newborder) {
    this.el.nativeElement.style.border = newborder;
  }

}
