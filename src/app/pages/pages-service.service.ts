import { Injectable } from '@angular/core';
import { Post, recentPost } from '../interfaces/interfaces';
import { OtherNews, OtherNewsInterface } from '../interfaces/otherNews';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PagesServiceService {
  public otherNews: OtherNewsInterface[] = OtherNews;
  public recentPost:Post[] = recentPost

  constructor() {}

  getNewsDetail(id: number): Observable<OtherNewsInterface> {
    const news = this.otherNews.find((news) => news.id === id)!;
    return of(news);
  }

  getRecentPost(id: number): Observable<Post> {
    const post = this.recentPost.find((post) => post.id === id)!
    return of(post);
  }

}




