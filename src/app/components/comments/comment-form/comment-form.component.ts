import { Component, inject } from '@angular/core';
import { CommentService } from '../comment-service.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent {
  public newCommentNick: string | number = '';
  public newCommentContent: string | number = '';

  private commentService = inject(CommentService);

  public createComment() {
    // creo el comentario
    const newComment = {
      id: Math.random(),
      nick: this.newCommentNick,
      content: this.newCommentContent,
    };

    // llamo a la función add del servicio
    this.commentService.addComment(newComment);

    this.newCommentContent = ''
    this.newCommentNick = ''
  }
}
