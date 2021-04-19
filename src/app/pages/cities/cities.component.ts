import { Component, EventEmitter,OnInit, Output } from '@angular/core';
import { CitiesService } from '../../services/cities/cities.service'
import { City } from '../../models/city'

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  @Output('statusSlectedChange') statusSelectedChange: EventEmitter<any> = new EventEmitter(); 
  city: City[];
  displayedColumns: string[] = ['id', 'name', 'description','action'];
  constructor(private cityservice: CitiesService) { }

  ngOnInit() {
    this.cityservice.getData().subscribe((res: any[])=>{
      this.city= res;
    })  
  }



}
