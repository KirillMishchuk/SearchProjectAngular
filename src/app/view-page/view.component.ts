import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListService } from '../shared/services/list.service';
import { StorageService } from '../shared/services/storage.service';
import { ActivatedRoute } from '@angular/router';
import { IList, ListItem } from '../shared/shared';
// import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit, OnDestroy {

  item: ListItem;
  private id: string;
  // private videoId: string;
  // private subscription: Subscription;
  private viewUrl: string = `http://www.youtube.com/embed/`;

  constructor(private listService: ListService,
    private currentRoute: ActivatedRoute,
    private storageService: StorageService) {
      // this.subscription = currentRoute.params.subscribe(params=>this.videoId=params['id']);
    }

  ngOnInit() {
    let storageId: string = this.storageService.loadItem();
    this.currentRoute.params.subscribe(params => {
      let id = params['id'];
      // this.id = params['id'];
      if (id) {
        this.getVideo(id);
      } else if (storageId) {
        this.getVideo(storageId);
      } else {
        return null;
      }
    });
  }

  // ngOnInit() {
  //   let id: string = this.currentRoute.snapshot.paramMap.get('id');
  //   let storageId: string = this.storageService.loadItem();
  //   if (id) {
  //     this.getVideo(id);
  //   } else if (storageId) {
  //     this.getVideo(storageId);
  //   } else {
  //     return;
  //   }
  // }

  ngOnDestroy() {
    if (this.id) {
      this.storageService.saveItem(this.id);
    }
  }

  getVideo(id: string) {
    this.id = id;
    this.viewUrl = `${this.viewUrl}${this.id}`;
    this.getView(this.id);
  }

  getView(videoId: string) {
    this.listService.getVideo(videoId).subscribe(item => {
      this.item = item;
    })
  }
}
