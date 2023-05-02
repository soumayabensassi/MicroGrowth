import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Insurance } from 'src/app/Models/insurance';
import { ActivitysectorService } from 'src/app/service/activitysector.service';
import { InsuranceServiceService } from 'src/app/service/insurance.service';
import { Location } from '@angular/common';
import { ActivitySector } from 'src/app/Models/activity-sector';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-insurance-modify-back',
  templateUrl: './insurance-modify-back.component.html',
  styleUrls: ['./insurance-modify-back.component.css']
})
export class InsuranceModifyBackComponent implements OnInit {
  id!: number;
  UpdatedInsurance: Insurance = new Insurance;
  activitySectors!: ActivitySector[];
  message!: string;
  sector!: ActivitySector;
  amount!: number
  constructor(private route: ActivatedRoute, private router: Router,
    private insuranceService: InsuranceServiceService, private activitySectorService: ActivitysectorService) { }

  ngOnInit(): void {
    this.getActivitySectors();
    this.UpdatedInsurance.amount = this.route.snapshot.params['amount'];
    this.UpdatedInsurance.endDate = this.route.snapshot.params['endDate'];
    this.UpdatedInsurance.startDate = this.route.snapshot.params['startDate'];
    this.UpdatedInsurance.idInsurance = this.route.snapshot.params['idInsurance'];
    this.UpdatedInsurance.activitySector = this.route.snapshot.params['activitySector'];

  }



  getActivitySectors(): void {
    this.activitySectorService.getActivitySectors()
      .subscribe(sectors => this.activitySectors = sectors);
  }

  onSubmit(): void {
    this.UpdatedInsurance.activitySector = this.sector;
    this.insuranceService.updateInsurance(this.UpdatedInsurance)
      .subscribe(() => this.message = 'Insurance successfully updated');
  }


}




