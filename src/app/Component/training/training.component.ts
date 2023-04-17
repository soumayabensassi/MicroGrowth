import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from 'src/app/Models/training';
import { User } from 'src/app/Models/user';
import { TrainingService } from 'src/app/service/training.service';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  list: Training[] = [];
  selectedTraining: Training = new Training();
  userInfo: User=new User();
  isEdit: boolean = false;
  constructor(private trainingservice: TrainingService,private userservice:UserService, private route: Router) { }

  ngOnInit(): void {
    this.trainingservice.getTraining();
  }

  getInsurances(): void {
    this.trainingservice.getTraining()
      .subscribe(training => {
        this.list = training;
      });
  }

  addInsurance(): void {
    this.trainingservice.addTraining(this.selectedTraining,this.userInfo.email)
      .subscribe(training => {
        this.list.push();
      });
  }

  updateInsurance(): void {
    this.trainingservice.updateInsurance(this.selectedTraining.idtraining , this.selectedTraining)
      .subscribe(() => {
        const index = this.list.findIndex(i => i.idtraining === this.selectedTraining.idtraining);
        this.list[index] = this.selectedTraining;
        this.isEdit = false;
      });
  }

  deleteInsurance(): void {
    this.trainingservice.deleteInsurance(this.selectedTraining.idtraining)
      .subscribe(() => {
        this.list = this.list.filter(i => i.idtraining !== this.selectedTraining.idtraining);
      });
  }

  onSelect(training: Training): void {
    this.selectedTraining = training;
    this.isEdit = true;
  }


}
