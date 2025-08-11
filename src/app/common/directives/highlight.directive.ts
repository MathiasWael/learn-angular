import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private el = inject(ElementRef);

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(false);
  }

  private highlight(add: boolean) {
    if (add) {
      this.el.nativeElement.classList.add('highlight');
    } else {
      this.el.nativeElement.classList.remove('highlight');
    }
  }
}
