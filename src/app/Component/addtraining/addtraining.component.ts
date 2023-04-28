import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Training } from 'src/app/Models/training';
import { TrainingService } from 'src/app/service/training.service';

@Component({
  selector: 'app-addtraining',
  templateUrl: './addtraining.component.html',
  styleUrls: ['./addtraining.component.css']
})
export class AddtrainingComponent implements OnInit {
  training:Training=new Training();
  cond= true;
  constructor(private trainingservice:TrainingService,private route:Router,private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.trainingservice.getTrainingById(this.active.snapshot.params['id']).subscribe((data)=>this.training=data)
  }
  add() 
  { this.active.snapshot.params['id']!= null 
  ?
  this.trainingservice.updateTraining(this.active.snapshot.params['id'],this.training).subscribe(()=>this.route.navigateByUrl("/listtrainingback"))
  :
  this.trainingservice.addTraining(this.training).subscribe(()=>this.route.navigateByUrl("/listtrainingback"))    
  }
 
}
