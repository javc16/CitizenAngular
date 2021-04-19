import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Citizen } from 'src/app/models/citizen';
@Component({
  selector: 'app-editcitizen',
  templateUrl: './editcitizen.component.html',
  styleUrls: ['./editcitizen.component.css']
})
export class EditcitizenComponent implements OnInit {

  name: string;
  lastname: string;
  citizen:Citizen;
  
  @Output('statusSelectedChangeName') statusSelectedChangeName: EventEmitter<any> = new EventEmitter();
  @Output('statusSelectedChangeLastName') statusSelectedChangeLastName: EventEmitter<any> = new EventEmitter();

  

  ngOnInit(): void {
  }

}
