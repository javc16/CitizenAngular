import { Component, EventEmitter,OnInit, Output } from '@angular/core';
import { CitizenService } from '../../services/citizen/citizen.service'
import { Citizen } from '../../models/citizen'

@Component({
  selector: 'app-citizen',
  templateUrl: './citizen.component.html',
  styleUrls: ['./citizen.component.css']
})
export class CitizenComponent implements OnInit {
 @Output('statusSlectedChange') statusSelectedChange: EventEmitter<any> = new EventEmitter(); 
  citizens: Citizen[];
  displayedColumns: string[] = ['id', 'name', 'lastName', 'phoneNumber','action'];
  constructor(private citizenService: CitizenService) { }

  ngOnInit() {
    this.citizenService.getData().subscribe((res: any[])=>{
      this.citizens= res;
    })  
  }

  

}



