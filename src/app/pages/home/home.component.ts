import { Component } from '@angular/core';
import {  recentPost } from 'src/app/interfaces/interfaces';
import { OtherNews, OtherNewsInterface, } from 'src/app/interfaces/otherNews';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public recentPost = recentPost;
  public OtherNews = OtherNews;

  selectNews?: OtherNewsInterface;
  onSelect(news: OtherNewsInterface): void {
    this.selectNews = news;
  }
}
