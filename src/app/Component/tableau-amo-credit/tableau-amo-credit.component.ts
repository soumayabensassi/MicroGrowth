import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditService } from 'src/app/service/credit.service';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-tableau-amo-credit',
  templateUrl: './tableau-amo-credit.component.html',
  styleUrls: ['./tableau-amo-credit.component.css']
})
export class TableauAmoCreditComponent implements OnInit {
  list!:number[][];

  constructor(private creditservice:CreditService,private userservice:UserService,private route:Router,private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.Calcul1(this.active.snapshot.params['id'])
  }
  Calcul1(id:any){
    this.creditservice.Calcul_tableau_amo(id).subscribe((res=>{console.log(res);
      this.list=res}));
  }  
}







