import { Component } from '@angular/core';
import { Menu, menuOptions } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  public menuOptions =   menuOptions


}
