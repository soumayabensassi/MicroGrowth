import { Router, ActivatedRoute } from '@angular/router';
import { InsuranceServiceService } from './../../service/insurance.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-simulate-insurance',
  templateUrl: './simulate-insurance.component.html',
  styleUrls: ['./simulate-insurance.component.css']
})
export class SimulateInsuranceComponent implements OnInit {
  name: string = '';
  lastName: string = '';
  income: number = 0;
  debt: number = 0;
  message: string = '';
  displayMessage1=false;
  displayMessage2= false;
  totalAmount!: number;
  monthlyPayment!: number;
  amount! : number;
  numberOfYears! : number;


  constructor(private router: Router, private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }


  onSubmitForm1() {
    const ratio = this.debt / this.income;
    if (ratio < 0.43) {
      this.message = `Dear ${this.name} ${this.lastName}, Your insurance request will be approved.`;
    } else {
      this.message = `Dear ${this.name} ${this.lastName}, Your insurance request will be dismissed.`;
    }
  }

  onSubmitForm2() {
    this.totalAmount = this.amount * (1 + 0.12);
    this.monthlyPayment = this.totalAmount / (12 * this.numberOfYears);
    this.displayMessage2 = true;

  }

  onCancel() {
    this.router.navigate(['/']);
  }


}
