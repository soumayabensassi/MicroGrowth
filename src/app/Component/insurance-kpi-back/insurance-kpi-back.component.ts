import { InsuranceServiceService } from './../../service/insurance.service';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { InsuranceKpiService } from 'src/app/service/insurance-kpi.service';

@Component({
  selector: 'app-insurance-kpi-back',
  templateUrl: './insurance-kpi-back.component.html',
  styleUrls: ['./insurance-kpi-back.component.css']
})
export class InsuranceKpiBackComponent implements OnInit {
  @ViewChild('pieChart') pieChart !: ElementRef;
  @ViewChild('doughnutChart') doughnutChart !: ElementRef;

  costOfSales!: number;
  cashIn!: number;
  cashOut!: number;
  sales!: number;
  financialKPI1Result!: number;
  financialKPI2Result!: number;
  financialKPI3Result!: number;
  financialKPI4Result!: number;
  satisfactionKPI!: number;
  prrKPI!: number;

  constructor(private http: HttpClient, private route : Router, private insurancekpiservice : InsuranceKpiService) { }


    ngOnInit(): void {
    }
  

  onSubmit() {
    // Make GET requests to the four endpoints
    this.http.get<number>('/admin/financial/CustomerKPI/' + this.costOfSales).subscribe(result => {
      this.financialKPI1Result = result;
    });

    this.http.get<number>('/admin/financial/CashFlowKPI', { params: { j: this.cashIn.toString(), p: this.cashOut.toString() } }).subscribe(result => {
      this.financialKPI2Result = result;
    });

    this.http.get<number>('/admin/financial/EPS-KPI', { params: { s: this.sales.toString(), l: this.cashOut.toString() } }).subscribe(result => {
      this.financialKPI3Result = result;
    });

    this.http.get<number>('/admin/financial/ProfitMarginKPI', { params: { l: this.cashOut.toString() } }).subscribe(result => {
      this.financialKPI4Result = result;
    });
  }

  
  

  onCancel() {
    this.route.navigate(['/']);
  }
}
