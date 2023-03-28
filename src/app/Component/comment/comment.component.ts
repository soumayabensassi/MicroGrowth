import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pubication } from 'src/app/Models/pubication';
import { Comment } from 'src/app/Models/comment';
import { CommentService } from 'src/app/service/comment.service';
import { PublicationService } from 'src/app/service/publication.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
pub!:Pubication
id!:number
idComment!:number
list: Comment[] = [];
comment:Comment=new Comment();
 constructor(private commentServive:CommentService,private active:ActivatedRoute,private publicationServive:PublicationService,private route:Router) { }

  ngOnInit(): void {
    this.id=this.active.snapshot.params['idPUB'];
    this.publicationServive.getPublicationById(this.id).subscribe((data) => this.pub= data)
    this.commentServive.getCommentByIdPublication(this.id).subscribe(
      data => this.list = data
    );
  }
  LikeFunction(id:number)
  {}
  DisLikeFunction(id:number)
  {}
  sendComment()
  {
    this.commentServive.addComment(this.comment,this.id).subscribe(
      ()=>this.list.push(this.comment)
    )
    
  }
}
