import { Component } from '@angular/core';
import { OtherNews, recenPost } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public recentPost = recenPost;
  public OtherNews = OtherNews;
}
