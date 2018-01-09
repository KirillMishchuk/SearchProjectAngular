import { Component, OnInit } from '@angular/core';
import { IList, ListItem, ListService } from '../shared/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  favouriteList: ListItem[] = [];

  constructor(private listService: ListService,
              private router: Router) { }


  ngOnInit(): void {
    let favouriteList = this.listService.getFavouriteList();
    this.favouriteList = favouriteList;
  }

  viewItem(item: ListItem) {
    this.router.navigate(["view", item.videoId]);
  }

  deleteItem(item: ListItem) {
    let confirmed = window.confirm('Вы уверены?');
    if(confirmed) {
      let index = this.favouriteList.indexOf(item);
      if (index > -1) {
        this.favouriteList.splice(index, 1);
      }
    }
  }

}
