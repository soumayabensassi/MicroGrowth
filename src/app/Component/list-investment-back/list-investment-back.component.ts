import { Component, OnInit } from '@angular/core';
import { Investment } from 'src/app/Models/investment';
import { InvestmentService } from 'src/app/service/investment.service';

@Component({
  selector: 'app-list-investment-back',
  templateUrl: './list-investment-back.component.html',
  styleUrls: ['./list-investment-back.component.css']
})
export class ListInvestmentBackComponent implements OnInit {
  list: Investment[] = [];
  constructor(private invSErvice:InvestmentService) { }

  ngOnInit(): void {
    this.invSErvice.getInvestments().subscribe(
      data =>{ this.list = data
      console.log(data)}
    );
  }
  deleteInvestment(id:number){
    this.invSErvice.deleteInvestment(id).subscribe()
  }

}
