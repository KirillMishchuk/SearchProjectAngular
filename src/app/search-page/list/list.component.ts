import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IList, ListItem } from '../../shared/shared';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list: ListItem[];
  @Input() isEmpty: boolean;

  @Output() delete: EventEmitter<ListItem> = new EventEmitter();
  // @Output() toggle: EventEmitter<ListItem> = new EventEmitter();
  @Output() add: EventEmitter<ListItem> = new EventEmitter();
  @Output() view: EventEmitter<ListItem> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  // onToggle(item: ListItem) {
  //   this.toggle.emit(item);
  // }

  onDelete(item: ListItem): void {
    this.delete.emit(item);
  }

  onAdd(item: ListItem): void {
    this.add.emit(item);
  }

  onView(item: ListItem): void {
    this.view.emit(item);
  }
}
