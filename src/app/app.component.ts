import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './Models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MicroGrowth';
  userIsAdmin!:any
  userInfo: User=new User();
  token!:any
  constructor(private userService:UserService) {
    
    /*if(this.userInfo.roles.name === '[ROLE_ADMIN]')
  {this.userIsAdmin="[ROLE_ADMIN]"}
  else if( this.userInfo.roles.name === '[ROLE_USER]')
  {this.userIsAdmin="[ROLE_USER]"}
  else 
  {this.userIsAdmin="null"}
  console.log("aaaaaaaaaaaaaaaa")
  console.log(this.userInfo.roles.name)*/
  this.userIsAdmin="[ROLE_USER]"
  }
  ngOnInit(): void {
    this.userService.getUserInfo().subscribe(
      (data) => {
      this.userInfo = data;
    },
    (error) => {
      console.log(error);
    }
  );
  }   
  }
