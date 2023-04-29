import { InsuranceServiceService } from './../../service/insurance.service';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { InsuranceKpiService } from 'src/app/service/insurance-kpi.service';

@Component({
  selector: 'app-insurance-kpi-back',
  templateUrl: './insurance-kpi-back.component.html',
  styleUrls: ['./insurance-kpi-back.component.css']
})
export class InsuranceKpiBackComponent implements OnInit {

  costOfSales!: number;
  cashIn!: number;
  cashOut!: number;
  sales!: number;
  financialKPI1Result!: number;
  financialKPI2Result!: number;
  financialKPI3Result!: number;
  financialKPI4Result!: number;
  doughnutChart!: Chart;
  pieChart!: Chart;
  satisfactionKPI!: number;
  prrKPI!: number;

  constructor(private http: HttpClient, private route : Router, private insurancekpiservice : InsuranceKpiService) { }

  ngOnInit() {
    Chart.register(...registerables);

    this.insurancekpiservice.getSatisfactionKPI().subscribe((data) => {
      this.satisfactionKPI = data;
      this.updatePieChart();
    });

    this.insurancekpiservice.getPRRKPI(10, 20).subscribe((data) => {
      this.prrKPI = data;
      this.updateDoughnutChart();
    });
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

  updateDoughnutChart() {
    if (!this.doughnutChart) {
      return;
    }

    this.doughnutChart.data.datasets[0].data = [this.prrKPI, 100 - this.prrKPI];
    this.doughnutChart.update();
  }

  updatePieChart() {
    if (!this.pieChart) {
      return;
    }
    this.pieChart.data.datasets[0].data = [this.satisfactionKPI, 100 - this.satisfactionKPI];
    this.pieChart.update();
  }

  

  onCancel() {
    this.route.navigate(['/']);
  }
}
