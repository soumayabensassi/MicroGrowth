import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Investment } from 'src/app/Models/investment';
import { InvestmentService } from 'src/app/service/investment.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-editInb',
  templateUrl: './editInb.component.html',
  styleUrls: ['./editInb.component.css']
})
export class EditInbComponent implements OnInit {



  iduser!:number;
  Investment: Investment = new Investment();
  constructor(private invest:InvestmentService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.Investment.idInvestment=this.route.snapshot.params['id'];
    console.log(this.Investment.idInvestment);
    this.invest.getInvestment(this.Investment.idInvestment).subscribe(
      (Investment:Investment)=>{this.Investment=Investment;
      }
    )

  }
  saveInvestment(){
    this.invest.updateInvestment(this.Investment.idInvestment,this.Investment).subscribe(

    );
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your investment is update',
      showConfirmButton: false,
      timer: 1500
    })

  }

};
