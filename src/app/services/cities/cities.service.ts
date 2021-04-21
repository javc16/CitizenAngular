import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/city';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  private url:string;
  constructor(private http: HttpClient) 
  {
    this.url =  " https://m8a2ffbxb4.execute-api.us-east-1.amazonaws.com/Prod/api/nativecity";
  }

  getData(): Observable<City[]> {
    return this.http.get<City[]>(this.url);
  }
}
