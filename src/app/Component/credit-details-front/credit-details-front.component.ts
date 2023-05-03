import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Credit } from 'src/app/Models/credit';
import { CreditService } from 'src/app/service/credit.service';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-credit-details-front',
  templateUrl: './credit-details-front.component.html',
  styleUrls: ['./credit-details-front.component.css']
})
export class CreditDetailsFrontComponent implements OnInit {
 id!:number
 credit!:Credit
 userInfo: User=new User();
  constructor(private creditService:CreditService,private userservice:UserService, private active:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    
    this.id=this.active.snapshot.params['id'];
    this.creditService.GetCreditById(this.id).subscribe(
      (data)=>this.credit=data
    )
    this.userservice.getUserInfo().subscribe(
      (data) => {
        this.userInfo = data;
      },
      (error) => {
        console.log(error);
        
      }
    );
  }
  accoder_pack()
  {
    this.active.snapshot.params['id']!= null 
    ?
    this.creditService.affecterPack(this.id,this.userInfo.email).subscribe(()=>this.route.navigateByUrl("/homePage"))
    :
    this.creditService.affecterPack(this.id,this.userInfo.email).subscribe(()=>this.route.navigateByUrl("/homePage"))
  console.log(this.credit)
  console.log(this.userInfo.email)
      
  }

}
