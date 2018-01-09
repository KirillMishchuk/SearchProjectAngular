import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  query: string = '';
  placeholder: string = 'Введите поисковой запрос';

  // @ViewChild("inputField") inputField: ElementRef;
  // @ViewChild("submitBtn") submitBtn: ElementRef;

  @Output() searchList: EventEmitter<string> = new EventEmitter();

  onSubmit(form: NgForm): void {
    // console.log(form);
    if (this.query) {
      this.searchList.emit(this.query);
    }
  }

  // checkClass(): boolean {
  //   return this.inputField.nativeElement.classList.contains('form-focus');
  // }

  constructor() { }

  ngOnInit() {
    // this.inputField.nativeElement.focus();
  }

}
