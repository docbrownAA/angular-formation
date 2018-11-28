import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') bgColor: string;
  @Input() color: string;
  constructor(private eltRef: ElementRef) { }

  @HostListener('mouseover') onMouseOver() {
    this.highLight(this.bgColor || 'orange', this.color);
  }

  @HostListener('mouseout') onMouseOut() {
    this.highLight('initial', 'initial');
  }
  private highLight(bgColor: string, color?: string) {
    this.eltRef.nativeElement.style.backgroundColor = bgColor;
    this.eltRef.nativeElement.style.color = color;
  }
}
