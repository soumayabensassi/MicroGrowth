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
        labels: ['Credit'],
        datasets: [
          {
            data: [results[0]],
            backgroundColor: ['#FF6384'],
            hoverBackgroundColor: ['#FF6384']
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
            backgroundColor: ['#36A2EB'],
            hoverBackgroundColor: ['#36A2EB']
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
