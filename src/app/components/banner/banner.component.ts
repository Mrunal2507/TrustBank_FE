import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  constructor (private dialogRef: MatDialogRef<BannerComponent>){ }

  closeH1() {
    this.dialogRef.close();
  }
}
