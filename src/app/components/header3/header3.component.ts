import { Component } from '@angular/core';

@Component({
  selector: 'app-header3',
  templateUrl: './header3.component.html',
  styleUrls: ['./header3.component.css']
})
export class Header3Component {
  activeLink1: string = 'personal loan' 
  activeLink: string = 'home'; 

  setActiveLink(linkName: string) {
    this.activeLink = linkName;
  }

  setActiveLink1(linkName: string) {
    this.activeLink1 = linkName;
  }

  activeTd: number = 0; 

  setActiveTd(tdIndex: number) {
    this.activeTd = tdIndex;
  }
}
