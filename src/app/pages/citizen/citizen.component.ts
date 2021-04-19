import { Component, OnInit } from '@angular/core';
import { CitizenService } from '../../services/citizen/citizen.service'
@Component({
  selector: 'app-citizen',
  templateUrl: './citizen.component.html',
  styleUrls: ['./citizen.component.css']
})
export class CitizenComponent implements OnInit {

  ItemsArray= [];

  constructor(private citizenService: CitizenService) { }

  ngOnInit() {
    this.citizenService.getData().subscribe((res: any[])=>{
      this.ItemsArray= res;
    })  
  }

}
