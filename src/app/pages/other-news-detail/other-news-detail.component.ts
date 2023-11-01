import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OtherNewsInterface } from 'src/app/interfaces/otherNews';
import { PagesServiceService } from '../pages-service.service';

@Component({
  selector: 'app-other-news-detail',
  templateUrl: './other-news-detail.component.html',
  styleUrls: ['./other-news-detail.component.css'],
})
export class OtherNewsDetailComponent {
  @Input() onews?: OtherNewsInterface;

  constructor(
    private route: ActivatedRoute,
    private pagesServiceService: PagesServiceService // private location: Location
  ) {}
  ngOnInit(): void {
    this.getNews();
  }

  getNews(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pagesServiceService
      .getNewsDetail(id)
      .subscribe((news) => (this.onews = news));
  }
}
