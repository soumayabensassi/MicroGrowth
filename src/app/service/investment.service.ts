import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Investment } from '../Models/investment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  URL="http://localhost:8082/MicroGrowth/";
   private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + ' ' + localStorage.getItem('access_token')
    })
     };


  constructor(private http: HttpClient) { }
  getInvestments(){
    return this.http.get<Investment[]>(this.URL+"afficherInvestment");
   }
  /* getProject(id:number){
    return this.http.get<Project>(this.URL+"/"+id);
   }*/
   addInvestment(investment:Investment){
    console.log("hello")

    return this.http.post(this.URL+"user/ajouterInvestment",investment,this.httpOptions)}
   updateInvestment(id:number,Investment:Investment){
    return this.http.put(this.URL+"modifierInvestment",Investment)
   }
   deleteInvestment(id:number){
    return this.http.delete(this.URL+"deleteInvestmentbyID/"+id)
   }
   calculerInteret(methodInvestissement: string, amountInves: number, duree: number): Observable<number> {
    return this.http.post<number>(this.URL+"interet?methodInvestissement=" + methodInvestissement + "&amountInves=" + amountInves + "&duree=" + duree, null);
}
exportPDF(iduser: number): Observable<Blob> {
  return this.http.get(this.URL+"exportpdfinvestissement?id="+iduser, { responseType: 'blob' });
}
calculerTauxPonzii(iduser: number): Observable<string[]> {

  return this.http.get<string[]>(this.URL+"ponzii/"+iduser);
}
calculerSession(x: number, y: number): Observable<number> {
  return this.http.get<number>(this.URL+"session/" + x + "/" + y);
}

  }



