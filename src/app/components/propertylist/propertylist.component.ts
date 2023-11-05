import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PropertyService } from 'src/app/Service/property.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface PeriodicElement{
  Date:string;
  marketvalue:string;
  pricesold:string;
  change:string;
  source:string;
  More:string;
}

@Component({
  selector: 'app-propertylist',
  templateUrl: './propertylist.component.html',
  styleUrls: ['./propertylist.component.css']
})
export class PropertylistComponent {
  showmore:boolean=false;
  title = 'PropertyList';
  isFormValid: boolean = false;

  ELEMENT_DATA: PeriodicElement[]=[
    {Date:'12/02/2018', marketvalue:'$487488', pricesold:'$487488', change:'2.2%', source:'Public', More:'Sold'},
    {Date:'12/02/2018', marketvalue:'$487488', pricesold:'$487488', change:'2.2%', source:'Public', More:'Sold'},
    {Date:'12/02/2018', marketvalue:'$487488', pricesold:'$487488', change:'2.2%', source:'Public', More:'Sold'},
    {Date:'12/02/2018', marketvalue:'$487488', pricesold:'$487488', change:'2.2%', source:'Public', More:'Sold'},
    {Date:'12/02/2018', marketvalue:'$487488', pricesold:'$487488', change:'2.2%', source:'Public', More:'Sold'},
    {Date:'12/02/2018', marketvalue:'$487488', pricesold:'$487488', change:'2.2%', source:'Public', More:'Sold'}
  ];
  slicedData: any[];

  constructor(private propertyService:PropertyService, private snackBar: MatSnackBar) {
    // Slice the first two elements and assign them to slicedData
    this.slicedData = this.ELEMENT_DATA.slice(0, 2);
    this.scheduleVisitForm.valueChanges.subscribe(() => {
      this.isFormValid = this.scheduleVisitForm.valid;
    });
  }
  scheduleVisitForm = new FormGroup({
    ftName: new FormControl('', [Validators.required]),
    ltName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('[6789]{1}[0-9]{9}'), Validators.minLength(10), Validators.maxLength(10)]),
    mailId: new FormControl('', [Validators.pattern("^[a-z0-9._]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.required]),
    acceptTerms: new FormControl(false, [Validators.requiredTrue]),
  });

  onSubmit() {
    if (!this.scheduleVisitForm.valid) {
      this.snackBar.open('Please fill in the form details before submitting.', 'Close', {
        duration: 3000,
        panelClass: ['snackbar-error'],
      });
      return;
    }
    console.log(this.scheduleVisitForm);
    this.propertyService.addUserDetails(this.scheduleVisitForm).subscribe(
      (Response: any) => {
        console.log('Data added');
        console.log(Response);
        this.snackBar.open('Visit is scheduled', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-success'],
        });
      },
      (error) => {
        console.error('Error adding data');
        console.error(error);
        this.snackBar.open('Failed to add data', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-error'],
        });
      }
    );
  }

  ngOnInit() {}

  get getFirstName() {
    return this.scheduleVisitForm.get('ftName');
  }

  get getAcceptTerms() {
    return this.scheduleVisitForm.get('acceptTerms');
  }

}
