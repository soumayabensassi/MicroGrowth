import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complaint } from '../Models/complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + ' ' + localStorage.getItem('access_token')
    })

  };

  ComplaintURL:string='http://localhost:8082/MicroGrowth'
  constructor(private http:HttpClient) { }
  getComplaint():Observable<Complaint[]>{
    return this.http.get<Complaint[]>(this.ComplaintURL+"/afficherC");
   }
   
   getComplaintById(id:number):Observable<Complaint>{
    return this.http.get<Complaint>(this.ComplaintURL+"/afficherAvecIdC/"+id);
   }
   
   addComplaint(complaint:Complaint){
    return this.http.post(this.ComplaintURL+"/user/ajouterComplaint",complaint,this.httpOptions)
   }
  

   deleteComplaint(id:number) 
   {
     return this.http.delete(`${this.ComplaintURL}/deleteComplaint/${id}`,this.httpOptions);
   }
  update(complaint:Complaint)
  {
    return this.http.put(`${this.ComplaintURL}/user/editComplaint` , complaint,this.httpOptions);
 }
}
