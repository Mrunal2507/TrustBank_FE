import { Component } from '@angular/core';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component {
  activeLink1: string = 'personal loan' 
  activeLink: string = 'home'; 

  setActiveLink(linkName: string) {
    this.activeLink = linkName;
  }

  setActiveLink1(linkName: string) {
    this.activeLink1 = linkName;
  }
}
