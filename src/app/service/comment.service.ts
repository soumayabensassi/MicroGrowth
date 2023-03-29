import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../Models/comment';
import { Dislike } from '../Models/dislike';
import { Like } from '../Models/like';
import { Pubication } from '../Models/pubication';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }
  getCommentByIdPublication(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>("http://localhost:8082/MicroGrowth/AfficherCommentbyPUBID/" + id);
  }
  addComment(pub: Comment,idpub:number) {
    return this.http.post<Comment>("http://localhost:8082/MicroGrowth/user/ajouterComment/"+idpub, pub)
  }
  likerPublication(like:Like,id:number)
  {
    return this.http.post("http://localhost:8082/MicroGrowth/user/LikerComment/"+id,like)
  }
  DislikerPublication(dislike:Dislike,id:number)
  {
    return this.http.post("http://localhost:8082/MicroGrowth/user/DislikerComment/"+id,dislike)
  }
  getCommentById(id:number):Observable<Comment>{
    return this.http.get<Comment>("http://localhost:8082/MicroGrowth/AfficherCommentbyID/"+id);
   }
}
