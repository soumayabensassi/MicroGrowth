import { InsuranceServiceService } from './../../service/insurance.service';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild, NgModule } from '@angular/core';
import { InsuranceKpiService } from 'src/app/service/insurance-kpi.service';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-insurance-kpi-back',
  templateUrl: './insurance-kpi-back.component.html',
  styleUrls: ['./insurance-kpi-back.component.css']
})
export class InsuranceKpiBackComponent implements OnInit {
  @ViewChild('pieChart', { static: true }) pieChart!: ElementRef;
  @ViewChild('doughnutChart', { static: true }) doughnutChart!: ElementRef;

  costOfSales!: number;
  cashIn!: number;
  cashOut!: number;
  sales!: number;
  shares!: number;
  expanses!: number;
  npolicies!: number;
  opolicies!: number;

  customerkpi!: number;
  cashflow!: number;
  eps!: number;
  profitmargin!: number;
  prr!: number;
  satisfactionR!: number;


  constructor(private http: HttpClient, private route: Router, private insurancekpiservice: InsuranceKpiService) { }


  ngOnInit(): void {
  }


  onSubmit() {
    this.insurancekpiservice.getCustomerKPI(this.costOfSales).subscribe(result => {
      this.customerkpi = result;
    });

    this.insurancekpiservice.getCashFlowKPI(this.cashOut, this.cashIn).subscribe(result => {
      this.cashflow = result;
    });

    this.insurancekpiservice.getEPSKPI(this.shares, this.expanses).subscribe(result => {
      this.eps = result;
    });

    this.insurancekpiservice.getProfitMarginKPI(this.expanses).subscribe(result => {
      this.profitmargin = result;
    });

    this.insurancekpiservice.getPRRKPI(this.npolicies, this.opolicies).subscribe(result => {
      this.prr = result;
      this.generateDoughnutChart(this.prr);

    });

    this.insurancekpiservice.getSatisfactionKPI().subscribe(result => {
      this.satisfactionR = result;
      this.generatePieChart(this.satisfactionR);
    });
  }
  generatePieChart(satisfactionR: number): void {
    new Chart(this.pieChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Satisfaction', 'Unsatisfaction'],
        datasets: [{
          label: 'Insurance KPI',
          data: [satisfactionR, 100 - satisfactionR],
          backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 99, 132)'
          ],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  generateDoughnutChart(prr: number): void {
    new Chart(this.doughnutChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['PRR KPI', 'Other'],
        datasets: [{
          label: 'Insurance KPI',
          data: [prr, 100 - prr],
          backgroundColor: [
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)'
          ],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }






  onCancel() {
    this.route.navigate(['/']);
  }
}
