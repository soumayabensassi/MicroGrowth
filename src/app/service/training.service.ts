import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Training } from '../Models/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  TrainingURL:string='http://localhost:8082/MicroGrowth'
  constructor(private http:HttpClient) { }
  getTraining():Observable<Training[]>{
    return this.http.get<Training[]>(this.TrainingURL+"/afficherT");
   }
   
   getTrainingById(id:number):Observable<Training>{
    return this.http.get<Training>(this.TrainingURL+"/afficherAvecIdT/"+id);
   }
   
   addTraining(training:Training){
    return this.http.post(this.TrainingURL+"/admin/ajouterTraining",training)
   }
  

   delete(id:number) 
   {
     return this.http.delete(`${this.TrainingURL}/admin/deleteTraining/${id}`);
   }
  updateTraining(id:number,training:Training)
  {
    return this.http.put(`${this.TrainingURL}/admin/editTraining` , training);
  }
}
