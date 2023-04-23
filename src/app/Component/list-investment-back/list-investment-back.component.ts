import { Component, OnInit } from '@angular/core';
import { Investment } from 'src/app/Models/investment';

@Component({
  selector: 'app-list-investment-back',
  templateUrl: './list-investment-back.component.html',
  styleUrls: ['./list-investment-back.component.css']
})
export class ListInvestmentBackComponent implements OnInit {
  list: Investment[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
