import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
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

  constructor(private traininnservice:TrainingService,private active:ActivatedRoute,private http: HttpClient,private route:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.traininnservice.getTrainingById(this.active.snapshot.params['id']).subscribe((data)=>this.training=data)
    const savedRating = localStorage.getItem('currentRating');
    if (savedRating) {
      this.currentRating = parseInt(savedRating);
    }
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
        this.toastr.success("You are interested to this event")
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
        this.toastr.success("You participated to this event")
    });
    }
    )
  }

  currentRating = 0;
  stars = [1, 2, 3, 4, 5];

 

  rate(score: number) {
    this.currentRating = score;
    localStorage.setItem('currentRating', score.toString()); // Enregistrement de la note dans le stockage local
    
   // const trainingId = 1; // replace with the training ID
    //const url = `http://localhost:8082/MicroGrowth/user/ratings/${trainingId}/${score}`;
    this.traininnservice.rates(this.active.snapshot.params['id'],score).subscribe(
      () => {
        console.log('Rating saved successfully');
        this.toastr.success("Rates enrigistrated")
      },
      err => {
        console.error('Error saving rating:', err);
        this.toastr.error("Error")
      }
    );
    
  }
}
