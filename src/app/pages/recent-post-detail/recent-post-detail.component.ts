import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/interfaces';
import { PagesServiceService } from '../pages-service.service';

@Component({
  selector: 'app-recent-post-detail',
  templateUrl: './recent-post-detail.component.html',
  styleUrls: ['./recent-post-detail.component.css'],
})
export class RecentPostDetailComponent {
  @Input() rPost?: Post;

  constructor(
    private route: ActivatedRoute,
    private pagesServiceService: PagesServiceService // private location: Location
  ) {}

  ngOnInit(): void {
    this.getpost();
  }

  getpost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pagesServiceService
      .getRecentPost(id).subscribe((post) => (this.rPost = post));
  }
}
