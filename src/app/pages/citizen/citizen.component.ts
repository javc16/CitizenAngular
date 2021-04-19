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
  dataSource = ELEMENT_DATA;
  constructor(private citizenService: CitizenService) { }

  ngOnInit() {
    this.citizenService.getData().subscribe((res: any[])=>{
      this.citizens= res;
    })  
  }

  

}

/* Static data */ 

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


// Id:number;
//     DNI:string;
//     Name:string;
//     LastName:string;
//     PhoneNumber:string;
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
