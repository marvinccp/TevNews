import { Component } from '@angular/core';
const options: any = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css'],
})


export class TopHeaderComponent {

  public date = new Date().toLocaleDateString('es-Es', options).toUpperCase()

}
