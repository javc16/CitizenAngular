import { Component, EventEmitter,OnInit, Output } from '@angular/core';
import { CitizenService } from '../../services/citizen/citizen.service'
import { Citizen } from '../../models/citizen'
import {Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-citizen',
  templateUrl: './citizen.component.html',
  styleUrls: ['./citizen.component.css']
})
export class CitizenComponent implements OnInit {
 @Output('statusSlectedChange') statusSelectedChange: EventEmitter<any> = new EventEmitter(); 
  citizens: Citizen[];
  displayedColumns: string[] = ['id', 'name', 'lastName', 'phoneNumber','nativeCity','action'];
  
  constructor(
    private citizenService: CitizenService,
    private router: Router,
    private toastr: ToastrService
    ) { }


  ngOnInit() {
    this.citizenService.getData().subscribe((res: any[])=>{
      this.citizens= res;
    })  
  }

  edit(citizen:Citizen){
    const id = citizen.id;
    this.router.navigate(['editcitizen',id]);
  }

  create(){
    this.router.navigate(['createcitizen']);
  }

  delete(citizen:Citizen) {  
    this.citizenService.deleteCitizen(citizen.id)
      .subscribe((res: any) => {
        this.citizenService.getData().subscribe((res: any[])=>{
          this.citizens= res;
        })  
      });     
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  

}



