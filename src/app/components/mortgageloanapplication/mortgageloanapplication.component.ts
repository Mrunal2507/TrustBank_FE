import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Connect } from 'src/app/Classes/connect';
import { LoanForm } from 'src/app/Classes/loan-form';
import { ConnectService } from 'src/app/Service/connect.service';
import { MortgageloanapplicationService } from 'src/app/Service/mortgageloanapplication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mortgageloanapplication',
  templateUrl: './mortgageloanapplication.component.html',
  styleUrls: ['./mortgageloanapplication.component.css']
})
export class MortgageloanapplicationComponent {

  mortgage:LoanForm=new LoanForm();
  mortgageForm: FormGroup;
  connect:Connect=new Connect();
  connectForm:FormGroup;
  isFormValid: boolean = false;
  isFormValid1: boolean = false;
   constructor(
     private MortgageloanApplicationService: MortgageloanapplicationService,
     private connectService: ConnectService,
     private formBuilder:FormBuilder,
     private snackBar: MatSnackBar) {
       this.mortgageForm=this.formBuilder.group({
         isCustomer:['',[Validators.required]],
         firstName:['',[Validators.required]],
         lastName:['',[Validators.required]],
         middleName:['',[Validators.required]],
         dob:['',[Validators.required]],
         email:['',[Validators.email]],
         ssnId:['',[Validators.required]],
         phoneNum:['',[Validators.required]],
         address:['',[Validators.required]],
         zip:['',[Validators.required]],
         state:['',[Validators.required]],
         city:['',[Validators.required]],
     }),
     this.connectForm=this.formBuilder.group({
      name:['',[Validators.required]],
      phnNo:['',[Validators.required]],
      emilId:['',[Validators.email]],
     })

     this.mortgageForm.valueChanges.subscribe(() => {
      this.isFormValid = this.mortgageForm.valid;
    });

    this.connectForm.valueChanges.subscribe(() => {
      this.isFormValid1 = this.connectForm.valid;
    });
    }
      
   ngOnInit(): void {
     
   }
  
   onSubmit(mortgageForm:FormGroup) {

    if (!this.mortgageForm.valid) {
      this.snackBar.open('Please fill in the form details before submitting.', 'Close', {
        duration: 3000,
        panelClass: ['snackbar-error'],
      });
      return;
    }
  
     this.MortgageloanApplicationService.submitFormData(mortgageForm.value).subscribe(
      (Response: any) => {
        console.log('Data added');
        console.log(Response);
        this.snackBar.open('Data added successfully', 'Close', {
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
   formData(formData: any) {
     throw new Error('Method not implemented.');
   }

   onClick(connectForm:FormGroup){
    if (!this.connectForm.valid) {
      this.snackBar.open('Please fill in the form details before submitting.', 'Close', {
        duration: 3000,
        panelClass: ['snackbar-error'],
      });
      return;
    }

    this.connectService.submitFormData(connectForm.value).subscribe(
      (Response: any) => {
        console.log('Data added');
        console.log(Response);
        this.snackBar.open('Agent will connect you shortly', 'Close', {
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

}
