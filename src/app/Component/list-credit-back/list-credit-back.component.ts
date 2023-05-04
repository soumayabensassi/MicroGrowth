import { Component, OnInit } from '@angular/core';
import {CreditService  } from "../../service/credit.service"
import{Credit} from "../../Models/credit"
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Intreview } from 'src/app/Models/intreview';

@Component({
  selector: 'app-list-credit-back',
  templateUrl: './list-credit-back.component.html',
  styleUrls: ['./list-credit-back.component.css']
})
export class ListCreditBackComponent implements OnInit {
credits:any[]=[];
score:any;
intreview!:Intreview;
penalite:any[]=[];
  constructor(private cs:CreditService,private userservice:UserService,private route:Router,private active:ActivatedRoute) { 
     
  }

  ngOnInit(): void {
    this.cs.AfficherCreditPersoBack().subscribe(data=>{
      this.credits=data;
      console.log(data)
    })
    this.cs.accorderPenalite().subscribe(data=>{
      this.penalite=data;
      console.log(data)
    })
  }
  deleteCreditByAdmin(i:number)
  {
    this.cs.deleteCreditByAdmin(i).subscribe(
      ()=>this.credits=this.credits.filter((c)=>c.id != i))
      this.cs.AfficherCreditPersoBack().subscribe(data=>{
        this.credits=data;}
      )
  }
  GetScoreCredit(i:number){
    this.cs.GetScoreCredit(i).subscribe(()=>
    {});
      
  }
  accorede_interview(idcredit:number,) 
  { this.active.snapshot.params['id']!= null 
  ?
  this.cs.accorderInterview(idcredit,this.intreview).subscribe(()=>this.route.navigateByUrl("homePage"))
  :
  this.cs.accorderInterview(idcredit,this.intreview).subscribe(()=>this.route.navigateByUrl("homePage"))
console.log(this.intreview)
}  
AccepterCredit(i:number)
  {
    this.cs.AccepterCredit(i).subscribe(
      ()=>this.credits=this.credits.filter((c)=>c.id != i))
      this.cs.AfficherCreditPersoBack().subscribe(data=>{
        this.credits=data;}
      )
  }
  RefuserCredit(i:number)
  {
    this.cs.RefuserCredit(i).subscribe(
      ()=>this.credits=this.credits.filter((c)=>c.id != i))
      this.cs.AfficherCreditPersoBack().subscribe(data=>{
        this.credits=data;}
      )
  }
}
