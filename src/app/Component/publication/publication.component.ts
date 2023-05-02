import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dislike } from 'src/app/Models/dislike';
import { Like } from 'src/app/Models/like';
import { Pubication } from 'src/app/Models/pubication';
import { User } from 'src/app/Models/user';
import { PublicationService } from 'src/app/service/publication.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  list!: Pubication[];
  like: Like = new Like();
  dislike: Dislike = new Dislike();
  userInfo: User = new User();
  listlike: number[] = []
  token!: any
  p:number=1
  itemsPerPage:number=2
  isLiked = false;
  totalpublication:any
  constructor(private pubService: PublicationService, private userservice: UserService, private route: Router) { }

  ngOnInit(): void {
    console.log(this.p)
    this.token = localStorage.getItem('access_token');
    this.userservice.getUserInfo().subscribe(
      (data) => {
        this.userInfo = data;
        
      },
      (error) => {
        console.log(error);
      }
    );
    this.pubService.getPublicationAprouvé().subscribe(
      data => {
        this.list = data
        console.log(data)
        this.totalpublication=data.length
         }
    );

  }
 /*for (var i = 0; i < this.list.length; i++) {
          this.pubService.GetNombreLike(this.list[i].idPublication).subscribe(
            (data1) => {
              this.list[i].likes.nbr = data1
              console.log(data1)

            })

        } 
 getNombreLikes(id: number): number {
    this.pubService.GetNombreLike(id).subscribe(
      (data1) => {
        this.a = data1
    })
      console.log(this.a)
      return this.a;
  }*/
  pub!:Pubication;
  LikeFunction(id: number) {
    
    this.pubService.likerPublication(this.like, id, this.userInfo.email).subscribe(
      ()=>{this.pubService.getPublicationById(id).subscribe((data) => {
        const pubIndex = this.list.findIndex((pub) => pub.idPublication === id);
        this.list[pubIndex] = data;
    });
    }
    )
  }
  DisLikeFunction(id: number) {
    this.pubService.DislikerPublication(this.dislike, id, this.userInfo.email).subscribe(
      ()=>{this.pubService.getPublicationById(id).subscribe((data) => {
        const pubIndex = this.list.findIndex((pub) => pub.idPublication === id);
        this.list[pubIndex] = data;
    });
    }
    )
  }
 
  isLoggedIn(): boolean {
    return this.token;
  }


  
}