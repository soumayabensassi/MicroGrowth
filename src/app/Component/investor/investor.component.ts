import { InvestmentService } from 'src/app/service/investment.service';
import { Investment } from './../../Models/investment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.css']
})
export class InvestorComponent implements OnInit {
  Investment: Investment = new Investment();
  constructor(private invest:InvestmentService) { }

  ngOnInit() {
  }

}
