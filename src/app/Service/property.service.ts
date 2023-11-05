import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  baseurl:string='http://localhost:9090/property/add'
  
  constructor( private http:HttpClient) { }
   
  addUserDetails(UserDetails:any){
    console.log(UserDetails.value)
    return this.http.post(`${this.baseurl}`,UserDetails.value)
   }
}
