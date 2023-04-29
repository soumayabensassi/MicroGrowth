import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/service/user.service';
export function matchPasswordValidator(g: FormGroup) {
  const password = g.get('password')?.value;
  const verifpassword = g.get('verifpassword')?.value;

  if (password !== verifpassword) {
    return { mismatch: true };
  } else {
    return null;
  }
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../../../assets/css/style.css']
})
export class SignupComponent implements OnInit {
  user:User=new User();
  passwordForm: FormGroup;
  constructor(private userService:UserService,private route:Router,private fb: FormBuilder) { 
    this.passwordForm = this.fb.group({
      password: ['', Validators.required],
      verifpassword: ['', Validators.required]
    }, { validator: matchPasswordValidator });
  
    }
  
  ngOnInit(): void {
  }
  saveUser(){
    this.userService.addUser(this.user).subscribe(
    
    )
    this.route.navigateByUrl('/signin')
  }
  
}
