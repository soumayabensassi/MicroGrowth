import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditService } from 'src/app/service/credit.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-penalities-back',
  templateUrl: './list-penalities-back.component.html',
  styleUrls: ['./list-penalities-back.component.css']
})
export class ListPenalitiesBackComponent implements OnInit {
  penalities:any[]=[];

  constructor(private cs:CreditService,private route:Router,private active:ActivatedRoute,private userservice:UserService) { }

  ngOnInit(): void {
    this.cs.afficherPenalite().subscribe(data=>{
      this.penalities=data;
      console.log(data)
    })
  }

}
