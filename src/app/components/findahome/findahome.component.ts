import { Component } from '@angular/core';

@Component({
  selector: 'app-findahome',
  templateUrl: './findahome.component.html',
  styleUrls: ['./findahome.component.css']
})
export class FindahomeComponent {

  isShowDiv = false;  
   
  toggleDisplayDiv() {  
    this.isShowDiv = !this.isShowDiv;  
  }
  toggleDontDisplayDiv() {  
    this.isShowDiv = false;
  }
  
}
