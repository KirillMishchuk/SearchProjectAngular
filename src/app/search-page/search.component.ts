import { Component, OnInit, OnDestroy } from '@angular/core';
import { IList, ListItem } from '../shared/shared';
import { ListService } from '../shared/shared';
import { StorageService } from '../shared/services/storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  public list: ListItem[];
  isEmpty: boolean = false;

  constructor(private listService: ListService,
              private router: Router,
              private storageService: StorageService) { }

  ngOnInit() {
    let list = this.storageService.loadList();
    if (list) {
      this.list = JSON.parse(list);
    }
  }

  ngOnDestroy() {
    if (this.list) {
      this.storageService.saveList(this.list);
    }
  }

  search(query: string): void {
    this.listService.getList(query).subscribe(list => {
      this.isEmpty = !list.length;
      this.list = list;
    })
  }

  deleteItem(item: ListItem) {
    let confirmed = window.confirm('Вы уверены?');
    if(confirmed) {
      let index = this.list.indexOf(item);
      if (index > -1) {
        this.list.splice(index, 1);
      }
    }
  }

  // toggleItem(item: ListItem) {
  //   if (!item.isAdded) {
  //     item.isMarked = !item.isMarked;
  //   }
  // }

  addItem(item: ListItem) {
    item.isAdded = true;
    this.listService.addToFavouriteList(item);
  }

  viewItem(item: ListItem) {
    this.router.navigate(["view", item.videoId]);
  }
}
