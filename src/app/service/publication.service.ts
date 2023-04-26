import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + ' ' + localStorage.getItem('access_token')
    })

  };
  constructor(private http:HttpClient) { }
  getPublication():Observable<Pubication[]>{
    return this.http.get<Pubication[]>("http://localhost:8082/MicroGrowth/afficherPublication");
   }
   getPublicationById(id:number):Observable<Pubication>{
    return this.http.get<Pubication>("http://localhost:8082/MicroGrowth/afficherPublicationbyID/"+id);
   }
   addPublication(pub:Pubication,email:string){
    return this.http.post("http://localhost:8082/MicroGrowth/user/ajouterPublication/"+email,pub,this.httpOptions)

   }
   aprouverPublication(pub:number,pubication:Pubication){
    return this.http.post("http://localhost:8082/MicroGrowth/admin/aprouvePublication/"+ pub,pubication,this.httpOptions)

   }
  likerPublication(like:Like,id:number,email:string)
  {
    return this.http.post("http://localhost:8082/MicroGrowth/user/LikerPublication/"+id+"/"+email,like,this.httpOptions)
  }
  DislikerPublication(dislike:Dislike,id:number,email:string)
  {
    return this.http.post("http://localhost:8082/MicroGrowth/user/DislikerPublication/"+id+"/"+email,dislike,this.httpOptions)
  }
  GetNombreLike(id:number)
  {
    return this.http.get<number>("http://localhost:8082/MicroGrowth/totalLike/"+id);
  }
  
  GetNombreDisLike(id:number)
  {
    return this.http.get<number>("http://localhost:8082/MicroGrowth/totalDisLike/"+id);
  }
  delete(id:number)
  {
    return this.http.delete<number>("http://localhost:8082/MicroGrowth/admin/deletePublication/"+id,this.httpOptions);
  }
  update(id:number,pub:Pubication)
  {
    return this.http.put("http://localhost:8082/MicroGrowth/user/updatePublication/"+id, pub,this.httpOptions)
  }
  getPublicationAprouvé():Observable<Pubication[]>{
    return this.http.get<Pubication[]>("http://localhost:8082/MicroGrowth/AfficheraprouvePublication")
  }
}
