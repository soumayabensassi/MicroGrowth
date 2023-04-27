import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pubication } from 'src/app/Models/pubication';
import { Comment } from 'src/app/Models/comment';
import { CommentService } from 'src/app/service/comment.service';
import { PublicationService } from 'src/app/service/publication.service';
import { Like } from 'src/app/Models/like';
import { Dislike } from 'src/app/Models/dislike';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/service/user.service';

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
like: Like = new Like();
dislike: Dislike = new Dislike();
userInfo: User=new User();
listpublication: Pubication[] = [];
token!:any

 constructor(private commentServive:CommentService,private active:ActivatedRoute,private userservice:UserService,private publicationServive:PublicationService,private route:Router) { }

  ngOnInit(): void {
    this.token= localStorage.getItem('access_token');

    this.publicationServive.getPublication().subscribe(
      data => this.listpublication = data
    );
    this.userservice.getUserInfo().subscribe(
      (data) => {
        this.userInfo = data;
      },
      (error) => {
        console.log(error);
      }
    );
    this.id=this.active.snapshot.params['idPUB'];
    this.publicationServive.getPublicationById(this.id).subscribe((data) => this.pub= data)
    this.commentServive.getCommentByIdPublication(this.id).subscribe(
      data => this.list = data
    );
  }
  LikeFunction(idCome:number)
  {
    this.commentServive.LikerComment(this.like, idCome,this.userInfo.email).subscribe(
      ()=>{this.commentServive.getCommentById(idCome).subscribe((data) => {
      const pubIndex = this.list.findIndex((pub) => pub.idComment === idCome);
      this.list[pubIndex] = data;
  });
  }
  )
}
  DisLikeFunction(idCome:number)
  { 
    this.commentServive.DislikerComment(this.dislike, idCome,this.userInfo.email).subscribe(
      ()=>{this.commentServive.getCommentById(idCome).subscribe((data) => {
        const pubIndex = this.list.findIndex((pub) => pub.idComment === idCome);
        this.list[pubIndex] = data;
    });
    }
    )
  }
  sendComment()
  {
    this.commentServive.addComment(this.comment,this.id,this.userInfo.email).subscribe(
      ()=>{
        this.publicationServive.getPublicationById(this.id).subscribe((data)=>this.comment.publication=data)
        this.userservice.getUserbyemail(this.userInfo.email).subscribe((data)=>this.comment.users=data)
        this.list.push(this.comment)
        window.location.reload()
      }
    )
    
  }
  isLoggedIn(): boolean {
    return this.token;
  }

  deleteComment(id:number)
  {
    this.commentServive.delete(id).subscribe(
      ()=>this.list=this.list.filter((p)=>p.idComment != id)
      )
  }
 
}
