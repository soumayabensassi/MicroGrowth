import { ActivitySector } from './../../Models/activity-sector';
import { InsuranceServiceService } from '../../service/insurance.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Insurance } from 'src/app/Models/insurance';
import { ActivitysectorService } from 'src/app/service/activitysector.service';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
  activitySectors!: ActivitySector[];
  newInsurance: Insurance = new Insurance();
  message!: string;
  userInfo!: User;
  sector!: ActivitySector;

  constructor(private insuranceService: InsuranceServiceService,private userservice : UserService ,private activitySectorService: ActivitysectorService , private route: Router, private active: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.insuranceService.getAllInsurances;
    this.getActivitySectors();
    this.userservice.getUserInfo().subscribe(
      (data) => {
        this.userInfo = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }


  getActivitySectors(): void {
    this.activitySectorService.getActivitySectors()
      .subscribe(activitySectors => this.activitySectors = activitySectors);
  }

  



  onSubmit(form: NgForm) {
    if (form.valid) {
      this.message = "Your Insurance has been added";
      this.newInsurance.activitySector= this.sector;
      this.newInsurance.users= this.userInfo;
      this.insuranceService.createInsurance(this.newInsurance).subscribe(insurance => {
        // handle success
        console.log('Insurance added successfully');
        form.resetForm();
        this.newInsurance = new Insurance();
      }, error => {
        // handle error
        console.log('Error adding insurance:', error);
      });
    }
  }
  showChatbot = false;
  toggleChatbot() {
    this.showChatbot = !this.showChatbot;
  }








}
