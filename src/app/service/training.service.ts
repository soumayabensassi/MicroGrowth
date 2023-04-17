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
    return this.http.get<Training>(this.TrainingURL+"/afficherAvecIdT"+id);
   }
   addTraining(training:Training,email:string){
    return this.http.post(this.TrainingURL+"/ajouterTraining/"+email,training)

   }
   updateInsurance(id: number, training: Training): Observable<Training> {
    //const url = `${this.apiUrl}/admin/update-Insurance/${id}`;
    return this.http.put<Training>(this.TrainingURL+"/editTraining/", training);
  }

  deleteInsurance(id: number): Observable<any> {
   // const url = `${this.apiUrl}/admin/deleteInsurance/${id}`;
    return this.http.delete(this.TrainingURL+"/deleteTraining/"+id);
  }
}
