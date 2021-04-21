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
    this.url =  " https://m8a2ffbxb4.execute-api.us-east-1.amazonaws.com/Prod/api/citizen";
  }

  getData(): Observable<Citizen[]> {
    return this.http.get<Citizen[]>(this.url);
  }

  getCitizenById(id: number){
    return this.http.get<Citizen>(this.url+'/' +id);
  }

  updateCitizen(id: number, citizen:Citizen ){
    return this.http.put(this.url+'/'+id, citizen);
  }

  createCitizen(citizen: Citizen) {
    return this.http.post(this.url, citizen);
  }

  deleteCitizen(id: number ){
    return this.http.delete(this.url+'/'+id);
  }
}
