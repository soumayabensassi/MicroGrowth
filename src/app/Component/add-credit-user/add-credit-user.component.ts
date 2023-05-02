import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Credit } from 'src/app/Models/credit';
import { User } from 'src/app/Models/user';
import { CreditService } from 'src/app/service/credit.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-credit-user',
  templateUrl: './add-credit-user.component.html',
  styleUrls: ['./add-credit-user.component.css']
})
export class AddCreditUserComponent implements OnInit {
  credit:Credit=new Credit();
  userInfo: User=new User();
  
  constructor(private creditservice:CreditService,private userservice:UserService,private route:Router,private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.userservice.getUserInfo().subscribe(
      (data) => {
        this.userInfo = data;
      },
      (error) => {
        console.log(error);
        
      }
    );
    }

    sendCreditUser() 
    { this.active.snapshot.params['id']!= null 
    ?
    this.creditservice.addCreditByUser(this.credit,this.userInfo.email).subscribe(()=>this.route.navigateByUrl("ListMyCreditsFrontComponent"))
    :
    this.creditservice.addCreditByUser(this.credit,this.userInfo.email).subscribe(()=>this.route.navigateByUrl("ListMyCreditsFrontComponent"))
  console.log(this.credit)
  console.log(this.userInfo)
      
    }
  

}


