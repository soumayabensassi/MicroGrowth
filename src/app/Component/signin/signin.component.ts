import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/service/user.service';
import { NgForm } from '@angular/forms/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../../../assets/css/style.css']
})
export class SigninComponent implements OnInit {
  user: User = new User();
  userInfo: User = new User();
  msg:string=''
  constructor(private userService: UserService, private route: Router) { }
  role: string = ''
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
  login(myForm: NgForm) {
    this.userService.login(this.user.email, this.user.password).subscribe(
      (response: any) => {
        console.log(response)
        // Login successful, store access_token and refresh_token in localStorage
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('refresh_token', response.refresh_token);
        this.userService.getUserInfo().subscribe(
          (data) => {
            this.userInfo = data;
            
            if (data.roles.name === '[ROLE_ADMIN]') {
              this.route.navigateByUrl('/admin')
            }
            if (data.roles.name === '[ROLE_USER]') {
              this.route.navigateByUrl('')
            }
          },
          (error) => {
            this.msg='Password Incorrect'
          }
        );
        
      },
      (error) => {
        // Login failed, display error message to user
        this.msg='Password Incorrect'
      })



  }
  test() {
    console.log("aaaaaaaaaaa")
    this.role = this.userInfo.roles.name
   }

}
