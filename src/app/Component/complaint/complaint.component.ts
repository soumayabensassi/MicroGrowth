import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
cond=false;
userInfo: User=new User();
  constructor(private compservice:ComplaintService, private active:ActivatedRoute,private route:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.compservice.getcomplaintwithuser().subscribe(
      data => {
        this.list = data
        
      }
    );
   // this.compservice.getComplaintById(this.active.snapshot.params['id']).subscribe((data)=>this.comp=data)
  
  }
delete(i:number)
{
  this.compservice.deleteComplaint(i).subscribe(
    ()=>this.list=this.list.filter((p)=>p.idComplaint != i)
    )
}
add() 
  { 
  this.compservice.addComplaint(this.complaint).subscribe(()=>this.route.navigateByUrl("/complaint"))  
  this.toastr.success("Complaint added succesfully")  
  }
  edit( complaint:Complaint){
    this.complaint=complaint;
    this.cond=true;
  }
 update(){
  this.compservice.update(this.complaint).subscribe(comp=>{
    this.vider();
    this.cond=false;
    this.toastr.success("Complaint updated succesfully")
  });
  
 }
 vider(){
  this.complaint=this.comp;
 }
 avis(){
  this.compservice.AvisUser().subscribe();

 }
 chatt(){
  this.compservice.chat().subscribe();

 }
}
