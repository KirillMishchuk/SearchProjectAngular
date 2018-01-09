import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMyConfirm]'
})
export class MyConfirmDirective {

  @Input('appMyConfirm') onConfirmed: Function = () => {};

  @HostListener('click') onConfirm(event: Event) {
    let confirmed = window.confirm('Вы уверены?');
    if(confirmed) {
      this.onConfirmed();
    }
  }

  constructor() { }

}
