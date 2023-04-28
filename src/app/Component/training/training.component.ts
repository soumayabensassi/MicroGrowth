import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from 'src/app/Models/training';
import { User } from 'src/app/Models/user';
import { TrainingService } from 'src/app/service/training.service';
import { UserService } from 'src/app/service/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],

})
export class TrainingComponent implements OnInit {
  list: Training[]=[] ;
  //selectedTraining: Training = new Training();
  //userInfo: User=new User();
  //isEdit: boolean = false;
  //token!: any
  constructor(private trainingservice: TrainingService) { }

  ngOnInit(): void {
    //this.token = localStorage.getItem('access_token');
    
    this.trainingservice.getTraining().subscribe(
      data => {
        this.list = data
        
      }
    );
  }
  

}
