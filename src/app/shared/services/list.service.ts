import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IList, ListItem } from '../shared';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ListService {
  private baseUrl: string = 'https://www.googleapis.com/youtube/v3/';
  private key: string = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
  maxResults: string = '10';
  favouriteList: ListItem[] = [];

  constructor(private httpClient: HttpClient) { }


  getList(query: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}search`, {
      params: {
        'maxResults': this.maxResults,
        'part': 'snippet, id',
        'q': query,
        'type': 'video',
        'key': this.key
      }
    })
      .map((response: HttpResponse<any>) => response['items'])
      .map(items => {
        return items.map(item => {
          return {
            videoId: item.id.videoId,
            title: item.snippet.title,
            channelTitle: item.snippet.channelTitle,
            description: item.snippet.description,
            publishedAt: item.snippet.publishedAt,
            thumb: item.snippet.thumbnails.high.url
          }
        })
      })
      .catch(this.handleError);
  }


  getVideo(videoId: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}videos`, {
      params: {
        part: 'snippet, contentDetails, statistics',
        id: videoId,
        key: this.key
      }
    })
      .map((response: HttpResponse<any>) => response['items'])
      .map(item => {
        // let elem = item[0]; 
        return {
          videoId: item[0].id,
          title: item[0].snippet.title,
          channelTitle: item[0].snippet.channelTitle,
          description: item[0].snippet.description,
          publishedAt: item[0].snippet.publishedAt,
          localized: item[0].snippet.localized.title,
          commentCount: item[0].statistics.commentCount,
          dislikeCount: item[0].statistics.dislikeCount,
          likeCount: item[0].statistics.likeCount,
          viewCount: item[0].statistics.viewCount
        }
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.log(error);
    alert(`Ошибка запроса, статус ошибки: ${error.status}`);
    return Observable.throw(`${error.message} ${error.status}` || error)
  }

  setMaxResults(maxResults: string) {
    this.maxResults = maxResults;
  }

  addToFavouriteList(item: ListItem) {
    this.favouriteList.push(item);
  }

  getFavouriteList(): ListItem[] {
    return this.favouriteList;
  }

}
