import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


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


  ELEMENT_DATA: PeriodicElement[]=[
    {Date:'12/02/2018', marketvalue:'$487488', pricesold:'$487488', change:'2.2%', source:'Public', More:'Sold'},
    {Date:'12/02/2018', marketvalue:'$487488', pricesold:'$487488', change:'2.2%', source:'Public', More:'Sold'},
    {Date:'12/02/2018', marketvalue:'$487488', pricesold:'$487488', change:'2.2%', source:'Public', More:'Sold'},
    {Date:'12/02/2018', marketvalue:'$487488', pricesold:'$487488', change:'2.2%', source:'Public', More:'Sold'},
    {Date:'12/02/2018', marketvalue:'$487488', pricesold:'$487488', change:'2.2%', source:'Public', More:'Sold'},
    {Date:'12/02/2018', marketvalue:'$487488', pricesold:'$487488', change:'2.2%', source:'Public', More:'Sold'}
  ];
  slicedData: any[];

  constructor() {
    // Slice the first two elements and assign them to slicedData
    this.slicedData = this.ELEMENT_DATA.slice(0, 2);
  }
  scheduleVisitForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required, Validators.pattern('[6789]{1}[0-9]{9}'), Validators.minLength(10), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.pattern("^[a-z0-9._]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.required]),
    acceptTerms: new FormControl(false, [Validators.requiredTrue]),
  });

  onSubmit() {
    console.log(this.scheduleVisitForm);
  }

  ngOnInit() {}

  get getFirstName() {
    return this.scheduleVisitForm.get('firstname');
  }

  get getAcceptTerms() {
    return this.scheduleVisitForm.get('acceptTerms');
  }
}
