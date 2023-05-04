import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { StatService } from 'src/app/service/stat.service';
import Chart from 'chart.js/auto';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})

export class StatComponent implements OnInit {
  @ViewChild('pieChart') pieChart!: ElementRef;
  ctx : any;
  config : any;
  chartData : number[] = [];
  chartDatalabels : any[] = [];
  r!:number;
  Profitability!:number;
  Profitability1!:number;
  constructor(private stat:StatService) { }

  ngOnInit(): void {
    this.stat.Calcultauxsatifait().subscribe(resultat => {
      this.Profitability = resultat; 
      console.log(resultat) 
      console.log(this.Profitability) }
       );
      
      this.stat.Calcultauxsatifait().subscribe(resultat => {
        this.Profitability1 = resultat; 
        console.log(resultat) 
        console.log(this.Profitability1)});
       this.chartData.push(50);
        this.chartData.push(50);
        this.chartDatalabels.push('Satisfied');
        this.chartDatalabels.push('Unsatified');
      
    
        this.ctx = document.getElementById('myChart');
        this.config = {
          type : 'pie',
          options : {
          },
          data : {
            labels : this.chartDatalabels,
            datasets : [{ 
              label: 'Chart Data',
              data: this.chartData,
              borderWidth: 5,
              borderColor: 'grey',
              backgroundColor: ['pink', 'yellow']
          }],
          }
        }
        const myChart = new Chart(this.ctx, this.config);
      }
    
  }


