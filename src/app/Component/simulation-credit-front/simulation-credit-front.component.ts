import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { CreditService } from 'src/app/service/credit.service';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-simulation-credit-front',
  templateUrl: './simulation-credit-front.component.html',
  styleUrls: ['./simulation-credit-front.component.css']
})
export class SimulationCreditFrontComponent implements OnInit {
  list!:any;
  userInfo: User=new User();
  montant:any;
  nbmois:any;
  propmois!:any
  constructor(private creditservice:CreditService,private userservice:UserService,private route:Router,private active:ActivatedRoute) { }
  ngOnInit(): void {
    this.userservice.getUserInfo().subscribe(
      (data) => {
        this.userInfo = data;
      },
      (error) => {
        console.log(error);
        
      }
    );
  }
  Simulation_credit(event:any){
    this.creditservice.Simulation_credit(event.target.montant.value,event.target.nbmois.value).subscribe((res=>{console.log(res);
      this.list=res}));
  }
EnvoyerProposition(){
  this.creditservice.EnvoyerMaxMontant(12).subscribe();
}
}
