import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRedText]'
})
export class RedTextDirective {

  constructor(elementRef: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elementRef.nativeElement, 'color', '#dd2B26');
  }

}
