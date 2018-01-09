export class ListItem {
  constructor(
    public videoId: string,
    public title: string,
    public channelTitle: string,
    public description: string,
    public publishedAt: string,
    // public isMarked: boolean,
    public isAdded: boolean,
    public thumb?: string,

    public localized?: string,
    public commentCount?: string,
    public dislikeCount?: string,
    public likeCount?: string,
    public viewCount?: string,
  ) {}
}


export interface IList {
  List: ListItem[];
}
