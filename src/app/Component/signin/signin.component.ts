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
  user:User=new User();
  constructor(private userService:UserService,private route:Router) { }

  ngOnInit(): void {
  }
  login(myForm:NgForm)
{
  this.userService.login(this.user.email,this.user.password).subscribe(
    data => console.log(data),
      error => console.log(error)
      )
}
}
