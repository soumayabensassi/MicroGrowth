import { InsuranceServiceService } from './../../service/insurance.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Insurance } from 'src/app/Models/insurance';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
  insurances!: Insurance[];
  selectedInsurance: Insurance = new Insurance();
  isEdit: boolean = false;

  constructor(private InsuranceServiceService: InsuranceServiceService, private route:Router) { 
  }


  ngOnInit(): void {
    this.InsuranceServiceService.getAllInsurances;
  }

  getInsurances(): void {
    this.InsuranceServiceService.getAllInsurances()
      .subscribe(insurances => {
        this.insurances = insurances;
      });
  }

  addInsurance(): void {
    this.InsuranceServiceService.createInsurance(this.selectedInsurance)
      .subscribe(insurance => {
        this.insurances.push(insurance);
        //this.selectedInsurance = { idInsurance: 0, na, price: 0 };
      });
  }

  updateInsurance(): void {
    this.InsuranceServiceService.updateInsurance(this.selectedInsurance.idInsurance , this.selectedInsurance)
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




  
}
