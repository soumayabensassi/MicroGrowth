import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-changemdp',
  templateUrl: './changemdp.component.html',
  styleUrls: ['./changemdp.component.css']
})
export class ChangemdpComponent implements OnInit {
  mail!: string
  user!: any
  test: boolean=false
  msg:string=''
  constructor(private u: UserService, private route: Router) { }

  ngOnInit(): void {
  }

  change() {
    this.u.verifUSer(this.mail).subscribe((data) =>{ this.test = data
      console.log(this.test)
      if (this.test==true) {
        this.u.sendEmailpassword(this.mail, this.user).subscribe(
        )
        this.route.navigateByUrl("/msg")
      }
      else(this.test==false)
      {
        this.msg="User not in database"
      }
    })
  
    /**/
  }

}
