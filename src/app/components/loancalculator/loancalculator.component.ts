import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Chart from 'chart.js/auto';
import { Homeloan } from 'src/app/Classes/homeloan';
import { HomeloanService } from 'src/app/Service/homeloan.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loancalculator',
  templateUrl: './loancalculator.component.html',
  styleUrls: ['./loancalculator.component.css']
})
export class LoancalculatorComponent {
  homeloan:Homeloan=new Homeloan();
  homeloanForm:FormGroup;
  chart: any = [];
 
  constructor(private formBuilder: FormBuilder, private homeloanService:HomeloanService,) {
    this.homeloanForm=this.formBuilder.group({
      homePrice:['',[Validators.required]],
      zipCode:['',[Validators.required]],
      downPayment:['',[Validators.required]],
      downPaymentPercent:['',[Validators.required]],
  });
}
  ngOnInit() {
    const xValues = ["Principle Interest", "Property Tax", "Other Taxes", "Home Owner’s Insurance", "HOA fees"];
    const yValues = [55, 49, 44, 24, 15];
    const barColors = [
      "#b91d47",
      "#00aba9",
      "#2b5797",
      "#e8c3b9",
      "#1e7145"
    ];
    new Chart('myChart', {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
     
    });
  }
  onSubmit(homeloanForm:FormGroup) {
      this.homeloanService.submitFormData(homeloanForm.value).subscribe(
        (Response: any) => {
          console.log('Data added');
          const monthlyPayment = Response.monthlyPayment;
          console.log(Response);
          Swal.fire('Success', `Your Monthly Charges: $${monthlyPayment}`, 'success');
        },
        (error) => {
          console.error('Error adding data');
          console.error(error);
          Swal.fire('Error', 'Failed to add data', 'error');
        }
      );
    }
    formData(formData: any) {
      throw new Error('Method not implemented.');
    }
}
