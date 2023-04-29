import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pubication } from 'src/app/Models/pubication';
import { User } from 'src/app/Models/user';
import { PublicationService } from 'src/app/service/publication.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.css']
})
export class AddPublicationComponent implements OnInit {
  publication: Pubication = new Pubication();
  userInfo: User = new User();

  constructor(private pubservice:PublicationService,private userservice:UserService,private route:Router,private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.userservice.getUserInfo().subscribe(
      (data) => {
        this.userInfo = data;
      },
      (error) => {
        console.log(error);
      }
    );
    this.pubservice.getPublicationById(this.active.snapshot.params['id']).subscribe((data)=>this.publication=data)
  }
  sendPublication() 
  { this.active.snapshot.params['id']!= null 
  ?
  this.pubservice.update(this.active.snapshot.params['id'],this.publication).subscribe(()=>this.route.navigateByUrl("/publication"))
  :
  this.pubservice.addPublication(this.publication,this.userInfo.email).subscribe()
  this.route.navigateByUrl("/homePage")
  
  }
}
