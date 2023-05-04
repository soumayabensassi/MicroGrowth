import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditService } from 'src/app/service/credit.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-intreview-back',
  templateUrl: './list-intreview-back.component.html',
  styleUrls: ['./list-intreview-back.component.css']
})
export class ListIntreviewBackComponent implements OnInit {
  intreview:any[]=[];

  constructor(private cs:CreditService,private route:Router,private active:ActivatedRoute,private userservice:UserService) { }

  ngOnInit(): void {
    this.cs.afficherIntreview().subscribe(data=>{
      this.intreview=data;
      console.log(data)
    })
  }

}
