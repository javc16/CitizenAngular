import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Citizen } from 'src/app/models/citizen';

@Injectable({
  providedIn: 'root'
})
export class CitizenService {
 private url:string;
  constructor(private http: HttpClient) 
  {
    this.url =  "https://localhost:44305/api/citizen";
  }

  getData(): Observable<Citizen[]> {
    return this.http.get<Citizen[]>(this.url);
  }
}
