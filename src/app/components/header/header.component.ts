import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  activeLink1: string = 'personal loan' 
  activeLink: string = 'home'; 

  setActiveLink(linkName: string) {
    this.activeLink = linkName;
  }

  setActiveLink1(linkName: string) {
    this.activeLink1 = linkName;
  }
}
