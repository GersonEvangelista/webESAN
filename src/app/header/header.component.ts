import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','./headerMobile.component.css']
})
export class HeaderComponent {

  showMenu = false;

  showBarMenu() {
    this.showMenu = !this.showMenu;
  }


}