import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../assets/css/style.css']
})
export class HeaderComponent implements OnInit {
token!:any
  constructor(private route:Router) {

  }

  ngOnInit(): void {
   this.token= localStorage.getItem('access_token');
   console.log(this.token)
  }
  isLoggedIn(): boolean {
    return this.token;
  }
  logout() {
    // code to log the user out
    localStorage.removeItem('access_token'); 
    localStorage.removeItem('refresh_token'); // remove the user token from local storage
    this.route.navigate(['/signin']); // navigate the user to the login page
    this.token=false
  }
}
