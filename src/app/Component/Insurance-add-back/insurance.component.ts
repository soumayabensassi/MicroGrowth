import { InsuranceServiceService } from '../../service/insurance.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivitySector } from 'src/app/Models/activity-sector';
import { Insurance } from 'src/app/Models/insurance';
import { ActivitysectorService } from 'src/app/service/activitysector.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
  activitySectors!: ActivitySector[];
  newInsurance: Insurance = new Insurance();
  insurances!: Insurance[];
  selectedInsurance: Insurance = new Insurance();
  isEdit: boolean = false;

  constructor(private InsuranceServiceService: InsuranceServiceService, private activitySectorService: ActivitysectorService , private route: Router, private active: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.InsuranceServiceService.getAllInsurances;
    this.getActivitySectors();
  }

  getInsurances(): void {
    this.InsuranceServiceService.getAllInsurances()
      .subscribe(insurances => {
        this.insurances = insurances;
      });
  }

  getActivitySectors(): void {
    this.activitySectorService.getActivitySectors()
      .subscribe(activitySectors => this.activitySectors = activitySectors);
  }

  addInsurance(): void {
    this.InsuranceServiceService.createInsurance(this.selectedInsurance)
      .subscribe(insurance => {
        this.insurances.push(insurance);
        //this.selectedInsurance = { idInsurance: 0, na, price: 0 };
      });
  }

  updateInsurance(): void {
    this.InsuranceServiceService.updateInsurance(this.selectedInsurance.idInsurance, this.selectedInsurance)
      .subscribe(() => {
        const index = this.insurances.findIndex(i => i.idInsurance === this.selectedInsurance.idInsurance);
        this.insurances[index] = this.selectedInsurance;
        //this.selectedInsurance = { idInsurance: null, nameInsurance: '', price: null };
        this.isEdit = false;
      });
  }

  deleteInsurance(): void {
    this.InsuranceServiceService.deleteInsurance(this.selectedInsurance.idInsurance)
      .subscribe(() => {
        this.insurances = this.insurances.filter(i => i.idInsurance !== this.selectedInsurance.idInsurance);
        //this.selectedInsurance = { idInsurance: null, nameInsurance: '', price: null };
      });
  }

  onSelect(insurance: Insurance): void {
    this.selectedInsurance = insurance;
    this.isEdit = true;
  }

  onSubmit(form: NgForm) {
    // Set the properties of the newInsurance object to the values entered in the form
    this.newInsurance.amount = form.value.amount;
    this.newInsurance.startDate = form.value.startDate;
    this.newInsurance.endDate = form.value.endDate;
    this.newInsurance.activitySector = form.value.activitySector;
    this.newInsurance.users = form.value.users;
    this.InsuranceServiceService.createInsurance(this.newInsurance).subscribe(
      (response) => {
        console.log(response); // Log the response from the backend
        form.reset(); // Reset the form after submitting
      },
      (error) => {
        console.log(error); // Log any errors that occurred
      }
    );
  }







}
