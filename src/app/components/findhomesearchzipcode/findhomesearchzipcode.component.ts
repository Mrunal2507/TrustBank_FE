import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Mortgage } from 'src/app/Classes/mortgage';
import { FormServiceService } from 'src/app/Service/form-service.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-findhomesearchzipcode',
  templateUrl: './findhomesearchzipcode.component.html',
  styleUrls: ['./findhomesearchzipcode.component.css']
})
export class FindhomesearchzipcodeComponent{
  formDetails: Mortgage = new Mortgage();
  AddForm: FormGroup;
  isFormValid: boolean = false;
  
  constructor(private formService: FormServiceService, private formBuilder: FormBuilder, private router:Router, private snackBar: MatSnackBar) {
    
    this.AddForm = this.formBuilder.group({
      emailId: ['', [Validators.email]],
      fstName: ['', [Validators.required]],
      lstName: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      famMembers: ['', [Validators.required]],
      monthlyIn: ['', [Validators.required]],
      monthlyLia: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      children:['', [Validators.required]],
      luxury:['', [Validators.required]],
      inSource:['', [Validators.required]],
    });
    this.AddForm.valueChanges.subscribe(() => {
      this.isFormValid = this.AddForm.valid;
    });
  }
  
  AddMortgage() {
    if (!this.AddForm.valid) {
      this.snackBar.open('Please fill in the form details before submitting.', 'Close', {
        duration: 3000,
        panelClass: ['snackbar-error'],
      });
      return;
    }

    this.formDetails = this.AddForm.value;
    this.formService.addMortgage(this.formDetails).subscribe(
      (Response: any) => {
        console.log('Data added');
        console.log(Response);
        this.snackBar.open('Data added successfully', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-success'],
        }).afterDismissed().subscribe(() => {
          this.router.navigate(['findhome-map']);
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
  
}
