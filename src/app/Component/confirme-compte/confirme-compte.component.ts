import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { ConfirmeCompteService } from 'src/app/service/confirme-compte.service';

@Component({
  selector: 'app-confirme-compte',
  templateUrl: './confirme-compte.component.html',
  styleUrls: ['./confirme-compte.component.css']
})
export class ConfirmeCompteComponent implements OnInit {
  user:User=new User();
  constructor(private active:ActivatedRoute,private service:ConfirmeCompteService,private route:Router) { }
  email=this.active.snapshot.params['email'];
  ngOnInit(): void {
   
    
  }
  Confirmer(email:string)
  {
   this.service.getUserByEmail(this.email).subscribe((data)=>this.user=data)
   this.service.confirmeCompte(email,this.user).subscribe(
    ()=>this.route.navigateByUrl("/signin"))
    
  }
}
