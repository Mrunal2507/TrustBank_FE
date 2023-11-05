import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeloanService {
  backendUrl = 'http://localhost:9090';
  
  constructor(private http: HttpClient) { }
  
  public submitFormData(formData: any) {
    return this.http.post(this.backendUrl+'/saveAndCalculate', formData);
  }
}
