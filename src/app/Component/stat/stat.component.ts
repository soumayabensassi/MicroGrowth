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
      this.chartData.push(resultat);this.chartData.push(1-resultat);
      console.log(resultat);
      console.log(this.chartData);
    this.chartDatalabels.push("satisfied");
    this.chartDatalabels.push("unsatisfied");
      // Créer le graphique en utilisant les données mises à jour
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
    });
    
    
  }

}