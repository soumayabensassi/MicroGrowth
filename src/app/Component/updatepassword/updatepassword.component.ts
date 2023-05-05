import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { error } from 'console';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {
mdp!:string
email!:string
token!:string
msg:string=''
  constructor(private active:ActivatedRoute,private u:UserService,private route:Router){ }

  ngOnInit(): void {
    this.email=this.active.snapshot.params['email'];
    this.token=this.active.snapshot.params['token'];
  }
  changePassword(){
    this.u.changePAssword(this.email,this.token,this.mdp).subscribe(
      (data)=>{console.log(data)
        if(data==-1){
          this.msg="Password Already Changed"
        }
        else if(data==1)
        {
          this.route.navigateByUrl('/signin')
        }
      }
    )
    
  }
}
