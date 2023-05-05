import { InsuranceKpiService } from './../../service/insurance-kpi.service';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-insurance-kpis',
  templateUrl: './insurance-kpis.component.html',
  styleUrls: ['./insurance-kpis.component.css']
})
export class InsuranceKpisComponent implements OnInit {
  @ViewChild('pieChart', { static: true }) pieChart!: ElementRef;
  @ViewChild('doughnutChart', { static: true }) doughnutChart!: ElementRef;



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

  constructor(private http: HttpClient, private route: Router, private insuranceKpiService: InsuranceKpiService) { }

  ngOnInit(): void {
    // make the HTTP request to getSatisfactionKPI() and subscribe to the Observable
    

        // set up the data for the pie chart
        const satisfactionData = {
          labels: ['Satisfied', 'Non-satisfied'],
          datasets: [
            {
              data: [1, 0], // use satisfactionKPI for the 'Satisfied' slice
              backgroundColor: ['#358ac3', '#77c1de'] // blue for 'Satisfied', red for 'Non-satisfied'
            }
          ]
        };

        // set up the data for the doughnut chart
        const prrData = {
          labels: ['Policies you like', 'Policies you chose'],
          datasets: [
            {
              data: [80, 20], // use prrKPI for the 'In compliance' slice
              backgroundColor: ['#1e5e79', '#358ac3'] // green for 'In compliance', red for 'Not in compliance'
            }
          ]
        };

        // set up the options for both charts
        const options = {
          plugins: {
            legend: {
              display: false
            }
          }
        };

        // create the pie chart using the pieChartRef
        new Chart(this.pieChart.nativeElement, {
          type: 'pie',
          data: satisfactionData,
          options: options
        });

        // create the doughnut chart using the doughnutChartRef
        new Chart(this.doughnutChart.nativeElement, {
          type: 'doughnut',
          data: prrData,
          options: options
        });
  }

  showChatbot = false;
  toggleChatbot() {
    this.showChatbot = !this.showChatbot;
  }

  



  onCancel() {
    this.route.navigate(['/']);
  }
}
