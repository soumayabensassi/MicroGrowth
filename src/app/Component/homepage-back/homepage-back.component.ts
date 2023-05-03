import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { KPISouService } from 'src/app/service/kpisou.service';
import Chart from 'chart.js/auto';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-homepage-back',
  templateUrl: './homepage-back.component.html',
  styleUrls: ['./homepage-back.component.css']
})

export class HomepageBACKComponent implements OnInit {
  

  @ViewChild('pieChart') pieChart!: ElementRef;
  @ViewChild('pieChart2') pieChart2!: ElementRef;
  @ViewChild('pieChart3') pieChart3!: ElementRef;


  ReturnOnEquity:number=0
  ReturnOnAssets:number=0
  defaultRate:number=0
  rembourssement:number=0
  Profitability:number=0
  Profitability1:number=0
  constructor(private kpi:KPISouService) {
  }
   
  
  ngOnInit(): void {
  this.kpi.CalculRentabilité().subscribe((data)=>this.Profitability=data)
  this.kpi.CalculRentabilitéNonActualisé().subscribe((data)=>this.Profitability1=data)
    this.kpi.TauxDeDefaut().subscribe(
      (data) => {
        this.defaultRate=data
  
      },
      (error) => {
        console.log(error);
      }
      )
      this.kpi.TauxDeRemboursement().subscribe(
        (data) => {
          this.rembourssement=data
          const chartData = {
            labels: ['Default Rate','Repayment rate'],
            datasets: [
              {
                data: [1-this.rembourssement,this.rembourssement],
                backgroundColor: ['#358ac3','#77c1de'],
                hoverBackgroundColor: ['#358ac3','#77c1de']
              }
            ]
          };
          const chartOptions = {
            responsive: true,
            maintainAspectRatio: false
          };
        
          new Chart(this.pieChart3.nativeElement, {
            type: 'pie',
            data: chartData,
            options: chartOptions
          });
    
        },
        (error) => {
          console.log(error);
        }
      )
  this.kpi.ReturnOnEquity().subscribe(
    (data) => {
      this.ReturnOnEquity=data

    },
    (error) => {
      console.log(error);
    }
    )
  this.kpi.ReturnOnAssets().subscribe(
    (data)=>{
      this.ReturnOnAssets=data

    },
    (error) => {
      console.log(error);
    }
   )
   
  }
  myList: number[] = [];
  datasets: any[] = [];
  ngAfterViewInit() {
    const credit = this.kpi.revenuCredit()
    const invi = this.kpi.RevenuIInvesstisement()
    

    forkJoin([credit, invi]).subscribe((results: any) => {
      const chartData = {
        labels: ['Credit of this year','Credit of this year'],
        datasets: [
          {
            data: [50000,results[0]],
            backgroundColor: ['#358ac3','#77c1de'],
            hoverBackgroundColor: ['#358ac3','#77c1de']
          }
        ]
      };
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false
      };

      new Chart(this.pieChart.nativeElement, {
        type: 'bar',
        data: chartData,
        options: chartOptions
      });
      const chartData1 = {
        labels: ['Investment'],
        datasets: [
          {
            data: [results[1]],
            backgroundColor: ['#1e5e79'],
            hoverBackgroundColor: ['#1e5e79']
          }
        ]
      };
      const chartOptions1 = {
        responsive: true,
        maintainAspectRatio: false
      };

      new Chart(this.pieChart2.nativeElement, {
        type: 'bar',
        data: chartData1,
        options: chartOptions1
      });
    });  }
}
