import { Directive, HostBinding, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appFocus]' // директива вешается как атрибут, поэтому квадр. скобки
})
export class FormFocusDirective {

  @Input() submitBtn: HTMLInputElement;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostBinding('class.form-focus') isFocused = false;

  @HostListener('focus') onFocus() {
    this.isFocused = true;
    this.renderer.addClass(this.submitBtn, 'button-focus');
  }

  @HostListener('blur') onBlur() {
    if (!this.elementRef.nativeElement.value) {
      this.isFocused = false;
      this.renderer.removeClass(this.submitBtn, 'button-focus');
    }
  }

}
