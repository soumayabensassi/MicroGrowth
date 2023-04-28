import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from 'src/app/Models/complaint';
import { User } from 'src/app/Models/user';
import { ComplaintService } from 'src/app/service/complaint.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {
  list: Complaint[] = [];
  complaint:Complaint=new Complaint();
  comp!:Complaint
id!:number
idComment!:number

userInfo: User=new User();
  constructor(private compservice:ComplaintService, private active:ActivatedRoute,private route:Router,private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.getUserInfo().subscribe(
      (data) => {
        this.userInfo = data;
      },
      (error) => {
        console.log(error);
      });
  }
delete(i:number)
{
  this.compservice.deleteComplaint(i).subscribe(
    ()=>this.list=this.list.filter((p)=>p.idComplaint != i)
    )
}
sendPublication() 
{ 
this.compservice.addComplaint(this.complaint,this.userInfo.email).subscribe(()=>this.route.navigateByUrl("/complaint"))

  
}
}
