import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditService } from 'src/app/service/credit.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-credit-pack-back',
  templateUrl: './list-credit-pack-back.component.html',
  styleUrls: ['./list-credit-pack-back.component.css']
})
export class ListCreditPackBackComponent implements OnInit {
  credits:any[]=[];

  constructor(private cs:CreditService,private userservice:UserService,private route:Router,private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.cs.AfficherCreditPackBack().subscribe(data=>{
      this.credits=data;
      console.log(data)
    })
  }
  deleteCreditByAdmin(i:number)
  {
    this.cs.deleteCreditByAdmin(i).subscribe(
      ()=>this.credits=this.credits.filter((c)=>c.id != i))
      this.cs.AfficherCreditPackBack().subscribe(data=>{
        this.credits=data;}
      )
  }
}
