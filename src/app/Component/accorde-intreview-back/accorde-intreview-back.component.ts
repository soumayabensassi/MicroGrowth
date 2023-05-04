import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Intreview } from 'src/app/Models/intreview';
import { CreditService } from 'src/app/service/credit.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-accorde-intreview-back',
  templateUrl: './accorde-intreview-back.component.html',
  styleUrls: ['./accorde-intreview-back.component.css']
})
export class AccordeIntreviewBackComponent implements OnInit {

  constructor(private creditservice:CreditService,private userservice:UserService,private route:Router,private active:ActivatedRoute) { }
intreview:Intreview=new Intreview()
id!:number
  ngOnInit(): void {
    this.id=this.active.snapshot.params['id'];
  }
  accorderInterview() 
  { this.active.snapshot.params['id']!= null 
  ?
  this.creditservice.accorderInterview(this.id,this.intreview).subscribe(()=>this.route.navigateByUrl("listcreditback"))
  :
  this.creditservice.accorderInterview(this.id,this.intreview).subscribe(()=>this.route.navigateByUrl("listcreditback"))

    
  }
}
