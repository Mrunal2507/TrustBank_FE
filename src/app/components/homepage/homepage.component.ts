import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { interval, Observable, Subscription } from 'rxjs';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private dialog: MatDialog){ }

  intervalDelay: Observable<number> = interval(1000);
  intervalSubscription!: Subscription;

  ngOnInit() {
    // setTimeout(() => {
    //   this.openProfileDialog();
    // }, 1000);
    this.intervalSubscription = this.intervalDelay.subscribe(data => {
      console.log(data)
      if(data === 1){
        this.openProfileDialog();
        this.intervalSubscription.unsubscribe();
      }
    });
  }

  openProfileDialog(): void {
    this.dialog.open(BannerComponent, {
      width: '992px',
      height:'359px'
    });
  }

  ngOnDestroy(){
    this.intervalSubscription.unsubscribe();
  }
}
