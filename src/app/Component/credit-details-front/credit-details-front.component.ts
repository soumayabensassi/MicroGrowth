import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Credit } from 'src/app/Models/credit';
import { CreditService } from 'src/app/service/credit.service';

@Component({
  selector: 'app-credit-details-front',
  templateUrl: './credit-details-front.component.html',
  styleUrls: ['./credit-details-front.component.css']
})
export class CreditDetailsFrontComponent implements OnInit {
 id!:number
 credit!:Credit
  constructor(private creditService:CreditService,private active:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    
    this.id=this.active.snapshot.params['idpack'];
    this.creditService.GetCreditById(this.id).subscribe(
      (data)=>this.credit=data
    )
    
  }
  

}
