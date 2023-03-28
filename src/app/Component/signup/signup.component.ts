import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../../../assets/css/style.css']
})
export class SignupComponent implements OnInit {
  user:User=new User();
  constructor(private userService:UserService,private route:Router) { }

  ngOnInit(): void {
  }
  saveUser(){
    this.userService.addUser(this.user).subscribe(
      ()=>this.route.navigateByUrl("/signin")
    )
  }
}
