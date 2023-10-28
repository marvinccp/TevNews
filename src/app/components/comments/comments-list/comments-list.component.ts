import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/interfaces/commentInterfaces';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent {
  @Input() commentList?:Comment[] | null

}
