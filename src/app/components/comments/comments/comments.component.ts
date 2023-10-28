import { Component, inject } from '@angular/core';
import { Comment } from 'src/app/interfaces/commentInterfaces';
import { CommentService } from '../comment-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent {
  // Crear variable para traer los comentarios
  public allComments?: Comment[];

  // injectar el servicio
  private commentService = inject(CommentService);

  // Crear susbscripción y suscribirm al servicio para
  // traer los todos

  private commentSubscription: Subscription;

  constructor() {
    this.commentSubscription = this.commentService
      .getComments()
      .subscribe((comments) => {
        this.allComments = comments;
      });
  }

  // destriy de la susbcrption
  ngDestroy() {
    this.commentSubscription.unsubscribe();
  }
}
