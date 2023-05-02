import { InsuranceComponent } from './../Insurance-add-back/insurance.component';
import { ActivitysectorService } from './../../service/activitysector.service';
import { Insurance } from './../../Models/insurance';
import { InsuranceServiceService } from '../../service/insurance.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-insurance-show-back',
  templateUrl: './insurance-show-back.component.html',
  styleUrls: ['./insurance-show-back.component.css']
})
export class InsuranceShowBackComponent implements OnInit {

  insurances!: Insurance[];
  result: any;
  monthlyPayments: Map<number, number> = new Map();
  totalAmounts: Map<number, number> = new Map();
  message: string = '';
  debt!: number;
  income!: number;

  constructor(private insuranceServiceService: InsuranceServiceService, private activitysectorService: ActivitysectorService, private route: Router, private active: ActivatedRoute) { }

  ngOnInit(): void {
    this.insuranceServiceService.getAllInsurances().subscribe(insurances => {
      this.insurances = insurances;
      this.insurances.forEach(insurance => {
        this.calculateMonthlyPayment(insurance.amount, insurance.activitySector.interestRate, insurance.idInsurance);
        this.calculateTotalAmount(insurance.idInsurance, insurance.activitySector.interestRate);
      });
    });
    this.activitysectorService.getActivitySectors;
    this.calculateTotalAmount(this.insurances[0].idInsurance, 0.12);
  }


  deleteInsurance(insurance: Insurance): void {
    this.insuranceServiceService.deleteInsurance(insurance.idInsurance)
      .subscribe(() => {
        this.insurances = this.insurances.filter(i => i.idInsurance !== insurance.idInsurance);
      });
  }

  goToModify(insurance: Insurance): void {
    console.log(insurance)
    this.route.navigate(['/admin/Insurance-modify-back', insurance]);
  }

  /* calculateMonthlyPayment(loanAmount: number, interestRate: number): void {
     this.insuranceServiceService.calculateMonthlyPayment(loanAmount, interestRate)
       .subscribe(monthlyPayment => {
         this.monthlyPayment = monthlyPayment;
         
       });
   } */


  applyForInsurance(income: number, debt: number): void {
    this.insuranceServiceService.applyForInsurance(income, debt)
      .subscribe(result => console.log(result));
  }

  /* calculateTotalAmount(id: number, interestRate: number): void {
    this.insuranceServiceService.calculateTotalAmount(id, interestRate)
      .subscribe(totalAmount => {
        this.totalAmount = totalAmount;
        console.log(totalAmount);
      });
  } */

  calculateMonthlyPayment(loanAmount: number, interestRate: number, id: number): void {
    this.insuranceServiceService.calculateMonthlyPayment(loanAmount, interestRate)
      .subscribe(monthlyPayment => {
        this.monthlyPayments.set(id, monthlyPayment);
      });
  }

  calculateTotalAmount(id: number, interestRate: number): void {
    this.insuranceServiceService.calculateTotalAmount(id, interestRate)
      .subscribe(totalAmount => {
        this.totalAmounts.set(id, totalAmount);
      });
  }



  onSubmit() {
    console.log(`debt: ${this.debt}, income: ${this.income}`);
    if ((this.debt / this.income) >= 0.43) {
      this.message = `The insurance request will be dismissed.`;
    } else {
      this.message = `The insurance request will be approved.`;
    }
  }


  onCancel() {
    this.route.navigate(['/']);
  }

}
