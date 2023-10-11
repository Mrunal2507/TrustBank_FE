import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-loancalculator',
  templateUrl: './loancalculator.component.html',
  styleUrls: ['./loancalculator.component.css']
})
export class LoancalculatorComponent {
  yourForm: FormGroup;
  chart: any = []

  constructor(private formBuilder: FormBuilder) {
    this.yourForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.pattern(/^(?:[1-9][0-9]?|100)$/)]],
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
}
