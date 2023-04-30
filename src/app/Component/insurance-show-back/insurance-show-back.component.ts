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
  newInsurance: Insurance = new Insurance();
  insurances!: Insurance[];
  selectedInsurance: Insurance = new Insurance();
  result: any;
  monthlyPayment: any;
  monthlyPaymentS: any;
  totalAmount : any;
  message : string = '';
  debt!: number ;
  income!: number ;

  constructor(private insuranceServiceService: InsuranceServiceService, private ActivitysectorService :ActivitysectorService , private route: Router, private active: ActivatedRoute) { }

  ngOnInit(): void {
    this.insuranceServiceService.getAllInsurances;
    this.ActivitysectorService.getActivitySectors;
  }

  getInsurances(): void {
    this.insuranceServiceService.getAllInsurances()
      .subscribe(insurances => {
        this.insurances = insurances;
      });
  }

  deleteInsurance(insurance: Insurance): void {
    this.insuranceServiceService.deleteInsurance(insurance.idInsurance)
      .subscribe(() => {
        this.insurances = this.insurances.filter(i => i.idInsurance !== insurance.idInsurance);
      });
  }

  goToModify(insurance: Insurance): void {
    this.route.navigate(['/admin/Insurance-modify-back', insurance.idInsurance]);
  }

  calculateMonthlyPayment(loanAmount: number, interestRate: number): void {
    this.insuranceServiceService.calculateMonthlyPayment(loanAmount, interestRate)
      .subscribe(monthlyPayment => {
        this.monthlyPayment = monthlyPayment;
        console.log(monthlyPayment);
      });
  }

  calculateMonthlyPaymentS(idS: number, TotalInsuredValue: number, Deductible: number): void {
    this.insuranceServiceService.calculateMonthlyPaymentS(idS, TotalInsuredValue, Deductible)
      .subscribe(monthlyPaymentS => {
        this.monthlyPaymentS = monthlyPaymentS;
        console.log(monthlyPaymentS);
      });
  }

  applyForInsuranceC(income: number, mail: string, Score: number): void {
    this.insuranceServiceService.applyForInsuranceC(income, mail, Score)
      .subscribe(result => {
        this.result = result;
        console.log(result);
      })
  }

  applyForInsurance(income: number, debt: number): void {
    this.insuranceServiceService.applyForInsurance(income, debt)
      .subscribe(result => console.log(result));
  }

  calculateTotalAmount(id: number, interestRate: number): void {
    this.insuranceServiceService.calculateTotalAmount(id, interestRate)
      .subscribe(totalAmount => {
        this.totalAmount = totalAmount;
        console.log(totalAmount);
      });
  }

  onCancel() {
    this.route.navigate(['/']);
  }

  onSubmit() {
    console.log(`debt: ${this.debt}, income: ${this.income}`);
    if ((this.debt / this.income) >= 0.43) {
      this.message = `The insurance request will be dismissed.` ;
    } else {
      this.message = `The insurance request will be approved.` ;
    }
}

}
