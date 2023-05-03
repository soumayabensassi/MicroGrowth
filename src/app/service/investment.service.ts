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
    return this.http.get<Investment[]>(this.URL+"admin/afficherInvestment",this.httpOptions);
   }
   getProject(id:number){
    return this.http.get<Investment>(this.URL+"afficherInvbyID/"+id);
   }
   addInvestment(investment:Investment){
    console.log("hello")

    return this.http.post(this.URL+"user/ajouterInvestment",investment,this.httpOptions)}
   updateInvestment(id:number,Investment:Investment){
    return this.http.put(this.URL+"modifierInvestment",Investment)
   }
   deleteInvestment(id:number){
    return this.http.delete(this.URL+"admin/deleteInvestmentbyID/"+id,this.httpOptions)
   }
   calculerInteret(methodInvestissement: string, amountInves: number, duree: number): Observable<number> {
    return this.http.post<number>(this.URL+"admin/interet?methodInvestissement=" + methodInvestissement + "&amountInves=" + amountInves + "&duree=" + duree, null,this.httpOptions);
}
exportPDF(iduser: number): Observable<Blob> {
  return this.http.get(this.URL+"exportpdfinvestissement?id="+iduser,{ responseType: 'blob' });
}
calculerTauxPonzii(iduser: number): Observable<string[]> {

  return this.http.get<string[]>(this.URL+"admin/ponzii/"+iduser,this.httpOptions);
}
calculerSession(x: number, y: number): Observable<number> {
  return this.http.get<number>(this.URL+"admin/session/" + x + "/" + y,this.httpOptions);
}

  }



