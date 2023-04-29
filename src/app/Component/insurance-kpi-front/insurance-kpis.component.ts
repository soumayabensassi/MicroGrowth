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

  constructor(private http: HttpClient, private route: Router, private insuranceKpiService: InsuranceKpiService) { }

  ngOnInit(): void {
    // make the HTTP request to getSatisfactionKPI() and subscribe to the Observable
    this.insuranceKpiService.getSatisfactionKPI().subscribe(satisfactionData => {
      const satisfactionKPI = satisfactionData;

      // make the HTTP request to getPRRKPI() and subscribe to the Observable
      this.insuranceKpiService.getPRRKPI(10, 20).subscribe(prrrData => {
        const prrKPI = prrrData;

        // set up the data for the pie chart
        const satisfactionData = {
          labels: ['Satisfied', 'Non-satisfied'],
          datasets: [
            {
              data: [satisfactionKPI, 1 - satisfactionKPI], // use satisfactionKPI for the 'Satisfied' slice
              backgroundColor: ['#007bff', '#dc3545'] // blue for 'Satisfied', red for 'Non-satisfied'
            }
          ]
        };

        // set up the data for the doughnut chart
        const prrData = {
          labels: ['In compliance', 'Not in compliance'],
          datasets: [
            {
              data: [prrKPI, 1 - prrKPI], // use prrKPI for the 'In compliance' slice
              backgroundColor: ['#28a745', '#dc3545'] // green for 'In compliance', red for 'Not in compliance'
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
      });
    });
  }


  onCancel() {
    this.route.navigate(['/']);
  }
}
