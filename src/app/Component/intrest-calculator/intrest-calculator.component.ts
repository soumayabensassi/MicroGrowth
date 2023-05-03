import { Component, OnInit } from '@angular/core';
import { InvestmentService } from 'src/app/service/investment.service';
import { StartupService } from 'src/app/service/startup.service';

@Component({
  selector: 'app-intrest-calculator',
  templateUrl: './intrest-calculator.component.html',
  styleUrls: ['./intrest-calculator.component.css']
})
export class IntrestCalculatorComponent implements OnInit {
  methodInvestissement!: string;
  amountInves!: number;
  duree!: number;
  interet!: number | null;
  purchasePrice!: number;
   currentPrice!: number;
   numShares!: number;
   dividendYield!: number;
   holdingPeriod!: number;
   interetstock!: number | null;
   investissementId!:number;
   projetId!:number;
   investissementInitial!:number;
   tauxRendement!:number;
   interetObligation!: number | null;
   userid!:number;
   interestPonzii!:any[];
   session!:number;
   x!:number;
   y!:number;


  constructor(private invest:InvestmentService,private project:StartupService) { }

  ngOnInit() {
  }


calculerInteret() {
  this.invest.calculerInteret(this.methodInvestissement, this.amountInves, this.duree)
    .subscribe((interet: number) => {
      this.interet = interet;
    });
}
StockIntrest(){
this.project.stockInterest(this.purchasePrice,this.currentPrice,this.numShares,this.dividendYield,this.holdingPeriod).subscribe((interetstock: number) => {
  this.interetstock = interetstock;
});
}
obligationIntrest(){
  this.project.obligationIntrest(this.investissementId,this.projetId,this.investissementInitial,this.tauxRendement).subscribe((interetObligation: number) => {
    this.interetObligation = interetObligation;
  });
}
PonziIntrest(){
  this.invest.calculerTauxPonzii(this.userid).subscribe((interestPonzii) => {
    this.interestPonzii = interestPonzii;
  });
}
calculerSession(){
  this.invest.calculerSession(this.x,this.y).subscribe((session: number) => {
    this.session = session;
  });
}
}
