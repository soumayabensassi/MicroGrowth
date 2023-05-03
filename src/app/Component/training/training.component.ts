import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from 'src/app/Models/training';
import { User } from 'src/app/Models/user';
import { TrainingService } from 'src/app/service/training.service';
import { UserService } from 'src/app/service/user.service';
import { DatePipe } from '@angular/common';
import { Complaint } from 'src/app/Models/complaint';
import { ComplaintService } from 'src/app/service/complaint.service';


@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],

})
export class TrainingComponent implements OnInit {
  list: Training[]=[] ;
  listr:Complaint[]=[];
  //selectedTraining: Training = new Training();
  //userInfo: User=new User();
  //isEdit: boolean = false;
  //token!: any
  constructor(private trainingservice: TrainingService,private comp:ComplaintService) { }

  ngOnInit(): void {
    //this.token = localStorage.getItem('access_token');
    
    this.trainingservice.getTraining().subscribe(
      data => {
        this.list = data
        
      }
    );
    this.comp.getComplaint().subscribe(
      data => {
        this.listr= data
        
      }
    );
  }
  searchText: string = '';

  searchTextChanged(searchValue: string){
    this.searchText = searchValue;
   // console.log(this.searchText)

  }

}
