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
  a!: number
  constructor(private pubService: PublicationService, private userservice: UserService, private route: Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('access_token');
    this.userservice.getUserInfo().subscribe(
      (data) => {
        this.userInfo = data;

      },
      (error) => {
        console.log(error);
      }
    );
    this.pubService.getPublication().subscribe(
      data => {
        this.list = data
        for (var i = 0; i < this.list.length; i++) {
          this.pubService.GetNombreLike(this.list[i].idPublication).subscribe(
            (data1) => {
              this.list[i].likes.nbr = data1
              console.log(data1)

            })

        }


      }
    );


  }
 /* getNombreLikes(id: number): number {
    this.pubService.GetNombreLike(id).subscribe(
      (data1) => {
        this.a = data1
    })
      console.log(this.a)
      return this.a;
  }*/
  LikeFunction(id: number) {
    this.pubService.getPublicationById(id).subscribe((data) => this.like.publications = data);
    this.pubService.likerPublication(this.like, id, this.userInfo.email).subscribe(
    )

  }
  DisLikeFunction(id: number) {
    this.pubService.getPublicationById(id).subscribe((data) => this.dislike.publications = data);
    this.pubService.DislikerPublication(this.dislike, id, this.userInfo.email).subscribe(
      () => this.route.navigateByUrl('/homePage')
    )
  }
  test() {
    this.a = this.listlike[1]
  }
  isLoggedIn(): boolean {
    return this.token;
  }
}
