import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Credit } from '../Models/credit';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CreditService {
  private test = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
     
    })

  };
  constructor(private http: HttpClient) { }
  AfficherCredit() :Observable<any>{
    return this.http.get<Credit[]>("http://localhost:8082/MicroGrowth/admin/afficherCredits");
  }
  addCreditByUser(credit : Credit,email:string):Observable<any> {
    return this.http.post("http://localhost:8082/MicroGrowth/user/ajouterCreditByuser/"+email,credit)
  }
  addCreditByAdmin(credit : Credit,email:string):Observable<any>
  {
    return this.http.post<Credit>("http://localhost:8082/MicroGrowth/admin/ajouterCreditByadmin"+email,credit)
  }
  AfficherCreditPack() :Observable<any>{
    return this.http.get<Credit[]>("http://localhost:8082/MicroGrowth/user/afficherPacks");
  }
GetCreditById(id:number) :Observable<any>{
  return this.http.get<Credit[]>("http://localhost:8082/MicroGrowth/user/afficherCreditbyID/"+id);
}
deleteCreditByAdmin(id:number) :Observable<any>
  {
    return this.http.delete<number>("http://localhost:8082/MicroGrowth/admin/deleteCreditAdmin/"+id);
  }
  GetScoreCredit(id:number) :Observable<any>{
    return this.http.get<Credit[]>("http://localhost:8082/MicroGrowth/admin/AfficherScoreCredit/"+id);
  }
  affecterPack(idcredit : any ,email:string):Observable<any> {
    return this.http.post<Credit>("http://localhost:8082/MicroGrowth/user/demanderPack/"+idcredit+"/"+email,email)
  }
  AfficherMesCredits(email:string) :Observable<any>{
    return this.http.get<Credit[]>("http://localhost:8082/MicroGrowth/user/afficherMesCredit/"+email);
  }
  Calcul_tableau_amo(id:number){
    return this.http.get<number[][]>("http://localhost:8082/MicroGrowth/user/afficherTableauCredit/"+id)
  
  }
}
