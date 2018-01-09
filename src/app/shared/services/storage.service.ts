import { Injectable } from '@angular/core';
import { IList, ListItem } from '../shared';


@Injectable()
export class StorageService {

  private storageKey: string = 'list';
  private storageIdKey: string = 'item';


  constructor() {}

  saveList(list: ListItem[]) {
    sessionStorage.setItem(this.storageKey, JSON.stringify(list));
  }

  loadList() {
    return sessionStorage.getItem(this.storageKey);
  }

  saveItem(id: string) {
    sessionStorage.setItem(this.storageIdKey, id);
  }

  loadItem() {
    return sessionStorage.getItem(this.storageIdKey);
  }

}


// class Store {
//   constructor(storageApi) {
//     this.api = storageApi;
//   }
//   get() {
//     return this.api.getItem(this.key);
//   }
//   set(value) {
//     this.api.setItem(this.key, value);
//   }
// }

// class UserStore extends Store {
//   constructor(key) {
//     super(sessionStorage);
//     this.key = key;
//   }
// }
