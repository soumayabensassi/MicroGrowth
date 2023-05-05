import { Insurance } from './../../Models/insurance';
import { UserService } from './../../service/user.service';
import { ActivitysectorService } from './../../service/activitysector.service';
import { ActivitySector } from './../../Models/activity-sector';
import { InsuranceServiceService } from 'src/app/service/insurance.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from 'src/app/Models/user';
import { first } from 'rxjs';

@Component({
  selector: 'app-check-insurance',
  templateUrl: './check-insurance.component.html',
  styleUrls: ['./check-insurance.component.css']
})
export class CheckInsuranceComponent implements OnInit {
  insurances!: Insurance[];
  totalAmount!: number;
  monthlyPayment!: number;
  userInfo!: User;
  insurance0!: Insurance;

  constructor(private http: HttpClient, private userService: UserService, private insuranceService: InsuranceServiceService, private ActivitySector: ActivitysectorService) {
  }

  ngOnInit() {
    this.userService.getUserInfo().subscribe(
      (data) => {
        this.userInfo = data;
        this.insuranceService.getAllInsurances().subscribe(
          data => {
            this.insurances = data.filter(insurance => insurance.users.email === this.userInfo.email);
          },
          error => console.log(error)
        );
      });
      
    
    
  }
  
  
  

  
  showChatbot = false;
  toggleChatbot() {
    this.showChatbot = !this.showChatbot;
  }


  calculateTotalAmount(amount: number): number {
    return amount * (1 + 0.12);
  }

  calculateMonthlyPayment(totalAmount: number): number {
    return (totalAmount * (1 + 0.12)) / 12;
  }




}
