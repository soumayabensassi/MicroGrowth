import { InvestmentService } from 'src/app/service/investment.service';
import { Investment } from './../../Models/investment';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.css']
})
export class InvestorComponent implements OnInit {
  iduser!:number;
  Investment: Investment = new Investment();
  constructor(private invest:InvestmentService) { }

  ngOnInit() {
  }
  saveInvestment(){
    this.invest.addInvestment(this.Investment).subscribe(

    )

  }
  exportPDF(){
    this.invest.exportPDF(this.iduser,).subscribe( (data: Blob) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const filename = 'investments.pdf';
      saveAs(blob, filename);
    },
    error => console.error(error)
  );
  }

}
