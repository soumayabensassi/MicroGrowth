import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReCaptchaV3Service } from 'ng-recaptcha';
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
  formcaptcha:FormGroup
  constructor(private userService:UserService,private route:Router,private fb: FormBuilder) { 
    this.passwordForm = this.fb.group({
      password: ['', Validators.required],
      verifpassword: ['', Validators.required]
    }, { validator: matchPasswordValidator });
    this.formcaptcha = this.fb.group({
      recaptcha: ['', Validators.required]
    })
    
   
  
    }
  
  ngOnInit(): void {
    
  
    

  }
  captchaResponse!: string;

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}`);
    // Do something with the captchaResponse, such as sending it to your server
  }
  msg:string=''
  saveUser(){
    if(localStorage.getItem('_grecaptcha')){
    this.userService.addUser(this.user).subscribe(
    
    )
    this.route.navigateByUrl('/signin')}
    else 
    {
this.msg="check the captcha "
    }
  }
  
}
