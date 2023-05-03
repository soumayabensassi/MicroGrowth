import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Interesse } from 'src/app/Models/interesse';
import { Participer } from 'src/app/Models/participer';
import { Training } from 'src/app/Models/training';
import { User } from 'src/app/Models/user';
import { TrainingService } from 'src/app/service/training.service';

@Component({
  selector: 'app-trainingdetail',
  templateUrl: './trainingdetail.component.html',
  styleUrls: ['./trainingdetail.component.css']
})
export class TrainingdetailComponent implements OnInit {
  list: Training[]=[] ;
training: Training = new Training();

  constructor(private traininnservice:TrainingService,private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.traininnservice.getTrainingById(this.active.snapshot.params['id']).subscribe((data)=>this.training=data)
      }
detail(){
  this.traininnservice.getTrainingById(this.active.snapshot.params['id']).subscribe((data)=>this.training=data)

}
interesse: Interesse = new Interesse();
pub!:Training;
userInfo: User = new User();
  InteresseFunction(id: number) {
    
    this.traininnservice.interesse(this.interesse, id, this.userInfo.email).subscribe(
      ()=>{this.traininnservice.getTrainingById(id).subscribe((data) => {
        const pubIndex = this.list.findIndex((pub) => pub.idTraining === id);
        this.list[pubIndex] = data;
    });
    }
    )
  }
  participer:Participer= new Participer();
  ParticiperFunction(id: number) {
    this.traininnservice.participer(this.participer, id, this.userInfo.email).subscribe(
      ()=>{this.traininnservice.getTrainingById(id).subscribe((data) => {
        const pubIndex = this.list.findIndex((pub) => pub.idTraining === id);
        this.list[pubIndex] = data;
    });
    }
    )
  }
}
