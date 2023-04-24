import { Component, OnInit } from '@angular/core';
import {CreditService  } from "../../service/credit.service"
import{Credit} from "../../Models/credit"

@Component({
  selector: 'app-list-credit-back',
  templateUrl: './list-credit-back.component.html',
  styleUrls: ['./list-credit-back.component.css']
})
export class ListCreditBackComponent implements OnInit {
credits:any[]=[];
  constructor(private cs:CreditService) { 
     
  }

  ngOnInit(): void {
    this.cs.AfficherCredit().subscribe(data=>{
      this.credits=data;
      console.log(data)
    })
  }

}
