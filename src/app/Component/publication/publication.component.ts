import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dislike } from 'src/app/Models/dislike';
import { Like } from 'src/app/Models/like';
import { Pubication } from 'src/app/Models/pubication';
import { PublicationService } from 'src/app/service/publication.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  list: Pubication[] = [];
  like: Like = new Like();
  dislike: Dislike = new Dislike();
  constructor(private pubService: PublicationService, private route: Router) { }

  ngOnInit(): void {
    
    this.pubService.getPublication().subscribe(
      data => this.list = data
    );
    for (var i = 0; i < this.list.length; i++) {
+      console.log(this.list[i].likes)
      this.pubService.GetNombreLike(this.list[i].idPublication).subscribe(
        (data) => this.list[i].likes = data);
    }

  }

  LikeFunction(id: number) {
    this.pubService.getPublicationById(id).subscribe((data) => this.like.publications = data);
    this.pubService.likerPublication(this.like, id).subscribe(
      () => this.route.navigateByUrl('/homePage')
          )

  }
  DisLikeFunction(id: number) {
    this.pubService.getPublicationById(id).subscribe((data) => this.like.publications = data);
    this.pubService.DislikerPublication(this.dislike, id).subscribe(
      () => this.route.navigateByUrl('/homePage')
    )
  }
}
