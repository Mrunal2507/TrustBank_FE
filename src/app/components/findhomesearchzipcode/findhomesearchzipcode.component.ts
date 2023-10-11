import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-findhomesearchzipcode',
  templateUrl: './findhomesearchzipcode.component.html',
  styleUrls: ['./findhomesearchzipcode.component.css']
})
export class FindhomesearchzipcodeComponent {
  email = new FormControl('', [Validators.required, Validators.email]);

  firstName = new FormControl('', [Validators.required]);

  lastName = new FormControl('', [Validators.required]);

  phoneNo = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[0-9]+$/),
  ]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
