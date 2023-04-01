import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  userInfo: User=new User();
  constructor(private userservice:UserService,private route:Router) { }

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
  logout() {
    // code to log the user out
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token'); // remove the user token from local storage
    this.route.navigate(['/signin']); // navigate the user to the login page
  }
}
