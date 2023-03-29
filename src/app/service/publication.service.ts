import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dislike } from '../Models/dislike';
import { Like } from '../Models/like';
import { Pubication } from '../Models/pubication';
@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  PublicationURL:string=environment.apiURL+"/afficherPublication"
  constructor(private http:HttpClient) { }
  getPublication():Observable<Pubication[]>{
    return this.http.get<Pubication[]>("http://localhost:8082/MicroGrowth/afficherPublication");
   }
   getPublicationById(id:number):Observable<Pubication>{
    return this.http.get<Pubication>("http://localhost:8082/MicroGrowth/afficherPublicationbyID/"+id);
   }
   addPublication(pub:Pubication){
    return this.http.post("http://localhost:8082/MicroGrowth/user/ajouterPublication",pub)

   }
  likerPublication(like:Like,id:number)
  {
    return this.http.post("http://localhost:8082/MicroGrowth/user/LikerPublication/"+id,like)
  }
  DislikerPublication(dislike:Dislike,id:number)
  {
    return this.http.post("http://localhost:8082/MicroGrowth/user/DislikerPublication/"+id,dislike)
  }
  GetNombreLike(id:number)
  {
    return this.http.get<number>("http://localhost:8082/MicroGrowth/totalLike/"+id);
  }
  GetNombreDisLike(id:number)
  {
    return this.http.get<number>("http://localhost:8082/MicroGrowth/totalDisLike/"+id);
  }
}
