import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IList, ListItem } from '../../shared/shared';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

  isMarked: boolean = false;

  @Input() item: ListItem;
  @Input() index: number;

  @Output() delete: EventEmitter<ListItem> = new EventEmitter();
  // @Output() toggle: EventEmitter<ListItem> = new EventEmitter();
  @Output() add: EventEmitter<ListItem> = new EventEmitter();
  @Output() view: EventEmitter<ListItem> = new EventEmitter();


  constructor() { }

  onToggle(): void {
    // this.toggle.emit(this.item);
      // if (!this.item.isAdded) {
      //   this.isMarked = !this.isMarked;
      // }
    this.isMarked = !this.isMarked;
  }

  onAdd(): void {
    if (this.isMarked) {
    this.add.emit(this.item);
    }
  }

  onView(): void {
    this.view.emit(this.item);
  }

  onDelete(): void {
    this.delete.emit(this.item);
  }
}
