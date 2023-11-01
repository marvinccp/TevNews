import { Component } from '@angular/core';
import {  recentPost } from 'src/app/interfaces/interfaces';
import { OtherNews, OtherNewsInterface, } from 'src/app/interfaces/otherNews';
import { principalPost } from 'src/app/interfaces/principalPost';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public recentPost = recentPost;
  public OtherNews = OtherNews;
  public principalPost = principalPost


}
