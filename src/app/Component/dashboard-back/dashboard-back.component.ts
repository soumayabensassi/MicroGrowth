import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';
@Component({
  selector: 'app-dashboard-back',
  templateUrl: './dashboard-back.component.html',
  styleUrls: ['./dashboard-back.component.css']
})
export class DashboardBACKComponent implements OnInit {
  token!:any

  constructor(private route:Router){ }

  ngOnInit(): void {
  }
  logout() {
    // code to log the user out
    localStorage.removeItem('access_token'); 
    localStorage.removeItem('refresh_token'); // remove the user token from local storage
    this.route.navigate(['/signin']); // navigate the user to the login page
    this.token=false
  }
}
