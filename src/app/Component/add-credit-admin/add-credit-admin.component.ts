import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Credit } from 'src/app/Models/credit';
import { User } from 'src/app/Models/user';
import { CreditService } from 'src/app/service/credit.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-credit-admin',
  templateUrl: './add-credit-admin.component.html',
  styleUrls: ['./add-credit-admin.component.css']
})
export class AddCreditAdminComponent implements OnInit {

  constructor(private creditservice:CreditService,private userservice:UserService,private route:Router,private active:ActivatedRoute) { }
  credit:Credit=new Credit();
  userInfo: User=new User();
  ngOnInit(): void {
    this.userservice.getUserInfo().subscribe(
      (data) => {
        this.userInfo = data;
      },
      (error) => {
        console.log(error);
        
      }
    );
    console.log(this.credit)
    console.log(this.userInfo.email)
  }
  sendCreditAdminPack() 
    { this.active.snapshot.params['id']!= null 
    ?
    this.creditservice.addCreditByAdmin(this.credit,this.userInfo.email).subscribe(()=>this.route.navigateByUrl("/homePage"))
    :
    this.creditservice.addCreditByAdmin(this.credit,this.userInfo.email).subscribe(()=>this.route.navigateByUrl("/homePage"))
  console.log(this.credit)
      
    }

}
