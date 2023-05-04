import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';
import {UserService} from "../../service/user.service";
import {User} from "../../Models/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../assets/css/style.css']
})
export class HeaderComponent implements OnInit {
token!:any
  userInfo: User = new User();
  constructor(private route:Router, private userservice:UserService) {

  }

  ngOnInit(): void {
   this.token= localStorage.getItem('access_token');
   console.log(this.token)
  }
  isLoggedIn(): boolean {
    return this.token;
  }

  adminLoggedin(): boolean {
    let x : boolean=false;
  this.userservice.getUserInfo().subscribe(
    (data) => {
      this.userInfo = data;
      if (data.roles.name === '[ROLE_ADMIN]') {
        x=true;
      }

    },
    (error) => {
      console.log(error);

    }
  )
return x;
  }

  logout() {
    // code to log the user out
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token'); // remove the user token from local storage
    this.route.navigate(['/signin']); // navigate the user to the login page
    this.token=false
  }
}
