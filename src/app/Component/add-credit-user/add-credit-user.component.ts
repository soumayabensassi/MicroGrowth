import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Credit } from 'src/app/Models/credit';
import { User } from 'src/app/Models/user';
import { CreditService } from 'src/app/service/credit.service';

@Component({
  selector: 'app-add-credit-user',
  templateUrl: './add-credit-user.component.html',
  styleUrls: ['./add-credit-user.component.css']
})
export class AddCreditUserComponent implements OnInit {
  credit:Credit=new Credit();
  userInfo: User=new User();
  constructor(private creditservice:CreditService,private route:Router,private active:ActivatedRoute) { }

  ngOnInit(): void {
    }

    sendCreditUser() 
    { this.active.snapshot.params['id']!= null 
    ?
    this.creditservice.addCreditByUser(this.credit).subscribe(()=>this.route.navigateByUrl("/homepage"))
    :
    this.creditservice.addCreditByUser(this.credit).subscribe(()=>this.route.navigateByUrl("/homepage"))
  
      
    }
  

}


