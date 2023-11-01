import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PagesServiceService } from '../pages-service.service';
import { PrincipalPostInterface } from 'src/app/interfaces/principalPost';

@Component({
  selector: 'app-principal-post-detail',
  templateUrl: './principal-post-detail.component.html',
  styleUrls: ['./principal-post-detail.component.css'],
})
export class PrincipalPostDetailComponent {
  @Input() pPost?: PrincipalPostInterface;

  constructor(
    private route: ActivatedRoute,
    private pagesServiceService: PagesServiceService
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pagesServiceService
      .getprincipalPost(id)
      .subscribe((post) => (this.pPost = post));
  }
}
