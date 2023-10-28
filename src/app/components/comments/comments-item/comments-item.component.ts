import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/interfaces/commentInterfaces';

@Component({
  selector: 'app-comments-item',
  templateUrl: './comments-item.component.html',
  styleUrls: ['./comments-item.component.css']
})
export class CommentsItemComponent {

  @Input() commentItem?:Comment | null

}
