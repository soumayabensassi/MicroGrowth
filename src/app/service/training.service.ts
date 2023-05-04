import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Training } from '../Models/training';
import { Interesse } from '../Models/interesse';
import { Participer } from '../Models/participer';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + ' ' + localStorage.getItem('access_token')
    })

  };
  TrainingURL:string='http://localhost:8082/MicroGrowth'
  constructor(private http:HttpClient) { }
  getTraining():Observable<Training[]>{
    return this.http.get<Training[]>(this.TrainingURL+"/afficherT");
   }
   
   getTrainingById(id:number):Observable<Training>{
    return this.http.get<Training>(this.TrainingURL+"/afficherAvecIdT/"+id);
   }
   
   addTraining(training:Training){
    return this.http.post<Training>(`${this.TrainingURL}/ajouterTraining` , training,this.httpOptions);
    //return this.http.post(this.TrainingURL+"/ajouterTraining",training,this.httpOptions)
   }
   interesse(interesse:Interesse,id:number,email:string)
   {
     return this.http.post("http://localhost:8082/MicroGrowth/user/Interessetraining/"+id,interesse,this.httpOptions)
   }
   participer(participer:Participer,id:number,email:string)
   {
     return this.http.post("http://localhost:8082/MicroGrowth/user/Participer/"+id,participer,this.httpOptions)
   }

   delete(id:number) 
   {
     return this.http.delete(`${this.TrainingURL}/admin/deleteTraining/${id}`);
   }
  updateTraining(id:number,training:Training)
  {
    return this.http.put(`${this.TrainingURL}/admin/editTraining` , training);
  }
  rates(id:number,score:number){
    return this.http.post(`http://localhost:8082/MicroGrowth/user/ratings/${id}/${score}`,score,this.httpOptions)
  }
}
