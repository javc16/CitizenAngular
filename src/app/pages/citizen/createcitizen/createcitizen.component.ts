import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Citizen } from 'src/app/models/citizen';
import { City } from 'src/app/models/city';
import { CitiesService } from 'src/app/services/cities/cities.service';
import { CitizenService } from 'src/app/services/citizen/citizen.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-createcitizen',
  templateUrl: './createcitizen.component.html',
  styleUrls: ['./createcitizen.component.css']
})
export class CreatecitizenComponent implements OnInit {
  name: string;
  lastName: string;
  DNI:string;
  phoneNumber:string;
  citizen:Citizen;
  city: City[];
  selectedCity:number;

@Output('statusSelectedChangeCity') statusSelectedChangeCity: EventEmitter<any> = new EventEmitter();  
  constructor( activatedRoute:ActivatedRoute,
    private citizenService: CitizenService,
    private router: Router,
    private cityservice: CitiesService,
    private toastr: ToastrService,
    ) {
      this.citizen = new Citizen();

     }

  ngOnInit(): void {
    this.cityservice.getData().subscribe((res: any[])=>{
      this.city= res;
    })  
  }

selectedChangeCity(){
  this.statusSelectedChangeCity.emit(this.selectedCity);
}
  
  cancel() {
    this.router.navigate(['citizen']);
  }
  
  create() {  
    debugger;
    this.citizen.name = this.name;    
    this.citizen.lastName = this.lastName;
    this.citizen.dni = this.DNI;
    this.citizen.phoneNumber = this.phoneNumber;
    this.citizen.idNativeCity = this.selectedCity;   
   debugger;
    this.citizenService.createCitizen(this.citizen)
      .subscribe((res: any) => {
        if(res=="Added sucefully"){
          this.toastr.success(res, 'Citizen');
        }else{
          this.toastr.error(res, 'Citizen');

        }
      });
      this.router.navigate(['citizen']).then(() => {
        window.location.reload();
      });
 
  }
}
