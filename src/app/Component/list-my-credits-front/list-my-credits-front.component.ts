import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Credit } from 'src/app/Models/credit';
import { User } from 'src/app/Models/user';
import { CreditService } from 'src/app/service/credit.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-my-credits-front',
  templateUrl: './list-my-credits-front.component.html',
  styleUrls: ['./list-my-credits-front.component.css']
})
export class ListMyCreditsFrontComponent implements OnInit {
  credit:Credit=new Credit();
  userInfo: User=new User();
  credits:any[]=[];

  constructor(private creditservice:CreditService,private userservice:UserService,private route:Router,private active:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.userservice.getUserInfo().subscribe(
      (data) => {
        this.userInfo = data;
        this.creditservice.AfficherMesCredits(this.userInfo.email).subscribe(data=>{
          this.credits=data;
          console.log(data)
          console.log(this.credits)
          
        })
      },
      (error) => {
        console.log(error);
        
      }

    );
   
    

  }
  AfficherMesCredit(){
    this.creditservice.AfficherMesCredits(this.userInfo.email).subscribe(data=>{
      this.credits=data;
      console.log(data)
    })
  }

}
