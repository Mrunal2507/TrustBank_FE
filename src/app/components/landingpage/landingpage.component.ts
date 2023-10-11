import { Component } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {
  activeTd: number = 0; 

  setActiveTd(tdIndex: number) {
    this.activeTd = tdIndex;
  }
}
