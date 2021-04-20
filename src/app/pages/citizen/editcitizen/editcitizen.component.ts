import { Component,  OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Citizen } from 'src/app/models/citizen';
import { CitizenService } from 'src/app/services/citizen/citizen.service';

@Component({
  selector: 'app-editcitizen',
  templateUrl: './editcitizen.component.html',
  styleUrls: ['./editcitizen.component.css']
})
export class EditcitizenComponent implements OnInit {
  selectedName: string;
  selectedLastName: string;
  selectedDNI:string;
  selectedPhoneNumber:string;
  citizen:Citizen;
  
  

  constructor(
    activatedRoute:ActivatedRoute,
    private citizenService: CitizenService,
    private router: Router,
    ) 
    { 
    activatedRoute.params.subscribe(params => {
      this.getCitizenById(params['id']);
    });
      this.citizen = new Citizen();
  }

  ngOnInit(): void {
   
  }

 

  getCitizenById(id: number) {
    this.citizenService.getCitizenById(id).subscribe((res: any) => {
      this.citizen = res.data;
      this.selectedName = res.data.name; 
      this.selectedLastName = res.data.lastName;             
      this.selectedDNI = res.data.dni;
      this.selectedPhoneNumber = res.data.phoneNumber;      
    });
  }




  cancel() {
    this.router.navigate(['citizen']);
  }
  
  update() {  
    this.citizen.phoneNumber = this.selectedPhoneNumber;   
   debugger;
    this.citizenService.updateCitizen(this.citizen.id, this.citizen)
      .subscribe((res: any) => {
        
        if (res) {
          
        }else{
          this.router.navigate(['citizen']).then(() => {
            window.location.reload();
          });
        }       

      });
     
  }

  
 

}
