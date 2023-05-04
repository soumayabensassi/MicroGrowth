import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditService } from 'src/app/service/credit.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-credit-pack-demande',
  templateUrl: './list-credit-pack-demande.component.html',
  styleUrls: ['./list-credit-pack-demande.component.css']
})
export class ListCreditPackDemandeComponent implements OnInit {
  credits:any[]=[];

  constructor(private cs:CreditService,private userservice:UserService,private route:Router,private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.cs.afficherPacksdemander().subscribe(data=>{
      this.credits=data;
      console.log(data)
    })
  }
  AccepterCredit(i:number)
  {
    this.cs.AccepterCredit(i).subscribe(
      ()=>this.credits=this.credits.filter((c)=>c.id != i))
      this.cs.afficherPacksdemander().subscribe(data=>{
        this.credits=data;}
      )
  }
  RefuserCredit(i:number)
  {
    this.cs.RefuserCredit(i).subscribe(
      ()=>this.credits=this.credits.filter((c)=>c.id != i))
      this.cs.afficherPacksdemander().subscribe(data=>{
        this.credits=data;}
      )
  }

}
