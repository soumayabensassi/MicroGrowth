import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Insurance } from 'src/app/Models/insurance';
import { ActivitysectorService } from 'src/app/service/activitysector.service';
import { InsuranceServiceService } from 'src/app/service/insurance.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-insurance-modify-back',
  templateUrl: './insurance-modify-back.component.html',
  styleUrls: ['./insurance-modify-back.component.css']
})
export class InsuranceModifyBackComponent implements OnInit {
  insurance: Insurance = new Insurance();
  idInsurance!: number;
  insuranceForm!: FormGroup;

  constructor( private location: Location , private formBuilder: FormBuilder ,private InsuranceServiceService: InsuranceServiceService, private activitySectorService: ActivitysectorService, private route: Router, private active: ActivatedRoute) { }

  ngOnInit(): void {
    this.idInsurance = this.active.snapshot.params['id'];
    this.InsuranceServiceService.getInsuranceById(this.idInsurance).subscribe((data: Insurance) => {
      this.insuranceForm = this.formBuilder.group({
        amount: [data.amount, Validators.required],
        startDate: [data.startDate, Validators.required],
        endDate: [data.endDate, Validators.required],
        activitySector: [data.activitysector.idSecteur, Validators.required],
        user: [data.users.id_user, Validators.required]
      });
    });
  }
  updateInsurance() {
    this.InsuranceServiceService.updateInsurance(this.idInsurance, this.insurance)
      .subscribe(data => {
        console.log(data);
        this.insurance = new Insurance();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.InsuranceServiceService.updateInsurance(this.idInsurance, this.insuranceForm.value)
      .subscribe(() => {
        this.route.navigate(['/list-insurances']);
      });
  }

  gotoList() {
    this.route.navigate(['/list-insurances']);
  }

  goBack() {
    this.location.back();
  }




}
