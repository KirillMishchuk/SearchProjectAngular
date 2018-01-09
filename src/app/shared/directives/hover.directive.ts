import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]' // директива вешается как атрибут, поэтому квадр. скобки
})
export class HoverDirective {

  @HostBinding('class.hovered') isHovered = false;

  @HostListener('mouseenter', ['$event']) onMouseEnter(event: MouseEvent) {
    this.isHovered = true;
    // console.log(`X:${event.offsetX} Y:${event.offsetY}`);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;
  }

}
