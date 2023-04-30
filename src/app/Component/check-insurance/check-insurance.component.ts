import { ActivitysectorService } from './../../service/activitysector.service';
import { ActivitySector } from './../../Models/activity-sector';
import { InsuranceServiceService } from 'src/app/service/insurance.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Insurance } from 'src/app/Models/insurance';

@Component({
  selector: 'app-check-insurance',
  templateUrl: './check-insurance.component.html',
  styleUrls: ['./check-insurance.component.css']
})
export class CheckInsuranceComponent implements OnInit {
  insurance!: Insurance;
  totalAmount!: number;
  monthlyPayment!: number;
  id!: number;
  interestRate!: number;
  activitySectorName!: string;

  constructor(private http: HttpClient, private insuranceService: InsuranceServiceService, private ActivitySector: ActivitysectorService) {
  }

  ngOnInit(): void { }


  onSubmit(form: NgForm) {
    const id = form.value.id;
    this.activitySectorName = '';
    this.interestRate = 0;
    this.insuranceService.getInsuranceById(id).subscribe((data ) => {
      this.insurance = data;
      this.totalAmount = this.calculateTotalAmount(this.insurance.amount);
      this.monthlyPayment = this.calculateMonthlyPayment(this.totalAmount);
      console.log('ghaith');
      console.log(data);

      // retrieve activity sector by id
      //this.ActivitySector.getActivitySectorById(this.insurance.activitysector.idSecteur).subscribe((data: ActivitySector) => {
        //this.activitySectorName = data.name;
        //this.interestRate = data.interestRate;
        //console.log(this.interestRate);
      //}, error => {
       // console.log(error);
      //});
    }, error => {
      console.log(error);
    });
  }

  calculateTotalAmount(amount: number): number {
    return amount * (1 + 0.12);
  }

  calculateMonthlyPayment(totalAmount: number): number {
    return totalAmount / 12;
  }




}
