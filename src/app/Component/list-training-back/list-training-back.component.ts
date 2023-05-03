import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Training } from 'src/app/Models/training';
import { TrainingService } from 'src/app/service/training.service';

@Component({
  selector: 'app-list-training-back',
  templateUrl: './list-training-back.component.html',
  styleUrls: ['./list-training-back.component.css']
})
export class ListTrainingBackComponent implements OnInit {

  list: Training[] = [];
  training:Training=new Training();
  constructor(private trainingService:TrainingService,private route:Router,private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.trainingService.getTraining().subscribe(
      data => this.list = data
    );
  }

  getTrainings() {
    this.trainingService.getTraining().subscribe(training => this.list = training);
  }

  deleteTraining(id:number) {
    
    this.trainingService.delete(id).subscribe(
      () => this.list = this.list.filter(p => p.idTraining !== id),
      error => console.error(error)
    );
  }
  //sendPublication() 
  //{ 
  //this.trainingService.updateTraining(this.active.snapshot.params['id'],this.training).subscribe(()=>this.route.navigateByUrl("/publication"))
  //;
    
  //}
 
  
}
