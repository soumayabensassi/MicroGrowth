import { ActivitysectorService } from './../../service/activitysector.service';
import { ActivitySector } from './../../Models/activity-sector';
import { InsuranceServiceService } from 'src/app/service/insurance.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Insurance } from 'src/app/Models/insurance';

@Component({
  selector: 'app-check-insurance',
  templateUrl: './check-insurance.component.html',
  styleUrls: ['./check-insurance.component.css']
})
export class CheckInsuranceComponent implements OnInit {
  insuranceForm!: FormGroup;
  insurance!: Insurance;
  totalAmount!: number;
  monthlyPayment!: number;

  constructor(private http: HttpClient , private InsuranceServiceService : InsuranceServiceService , private formBuilder: FormBuilder, private ActivitySector:  ActivitysectorService ) { 
    this.insuranceForm = this.formBuilder.group({
      id: ['', Validators.required]
    });
  }

  ngOnInit(): void {  }

  getInsuranceById() {
    const id = this.insuranceForm.controls['id'].value;
    this.InsuranceServiceService.getInsuranceById(id).subscribe(
      (res) => {
        this.insurance = res;
        this.totalAmount = this.calculateTotalAmount(this.insurance.amount);
        this.monthlyPayment = this.calculateMonthlyPayment(this.totalAmount);
      },
    );
  }

  calculateTotalAmount(amount: number): number {
    return amount * (1 + 0.12);
  }

  calculateMonthlyPayment(totalAmount: number): number {
    return totalAmount / 12;
  }
  



}
