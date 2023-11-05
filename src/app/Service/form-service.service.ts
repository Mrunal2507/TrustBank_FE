import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Mortgage } from '../Classes/mortgage';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  private PATH_OF_API = "http://localhost:9090";
  
  constructor(private httpClient: HttpClient) { }

  public addMortgage(mortgage: Mortgage): Observable<boolean> {
      return this.httpClient.post<boolean>(`${this.PATH_OF_API}/mortgage/apply`, mortgage);
  }
}

