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
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + ' ' + localStorage.getItem('access_token')
    })

  };
  constructor(private http: HttpClient) { }
  AfficherCredit() :Observable<any>{
    return this.http.get<Credit[]>("http://localhost:8082/MicroGrowth/admin/afficherCredits",this.httpOptions);
  }
  addCreditByUser(credit : Credit,email:string):Observable<any> {
    return this.http.post("http://localhost:8082/MicroGrowth/user/ajouterCreditByuser/"+email,credit,this.httpOptions)
  }
  addCreditByAdmin(credit : Credit,email:string):Observable<any>
  {
    return this.http.post<Credit>("http://localhost:8082/MicroGrowth/admin/ajouterCreditByadmin/"+email,credit,this.httpOptions)
  }
  AfficherCreditPack() :Observable<any>{
    return this.http.get<Credit[]>("http://localhost:8082/MicroGrowth/user/afficherPacks",this.httpOptions);
  }
GetCreditById(id:number) :Observable<any>{
  return this.http.get<Credit[]>("http://localhost:8082/MicroGrowth/user/afficherCreditbyID/"+id,this.httpOptions);
}
deleteCreditByAdmin(id:number) :Observable<any>
  {
    return this.http.delete<number>("http://localhost:8082/MicroGrowth/admin/deleteCreditAdmin/"+id,this.httpOptions);
  }
  GetScoreCredit(id:number) :Observable<any>{
    return this.http.get<Credit[]>("http://localhost:8082/MicroGrowth/admin/AfficherScoreCredit/"+id,this.httpOptions);
  }
  affecterPack(idcredit : any ,email:string):Observable<any> {
    return this.http.post<Credit>("http://localhost:8082/MicroGrowth/user/demanderPack/"+idcredit+"/"+email,email,this.httpOptions)
  }
  AfficherMesCredits(email:string) :Observable<any>{
    return this.http.get<Credit[]>("http://localhost:8082/MicroGrowth/user/afficherMesCredit/"+email,this.httpOptions);
  }
  Calcul_tableau_amo(id:number):Observable<any>{
    return this.http.get<number[][]>("http://localhost:8082/MicroGrowth/user/afficherTableauCredit/"+id,this.httpOptions)
  }
  Simulation_credit(montant:any, nbmois:number):Observable<any>{
    return this.http.get<number[]>("http://localhost:8082/MicroGrowth/user/SimulateurCredit/"+montant+"/"+nbmois,this.httpOptions)
  }
  accorderInterview(idcredit : number,intreview:any):Observable<any> {
    return this.http.post("http://localhost:8082/MicroGrowth/admin/AffecterIntreviewCredit/"+idcredit,intreview,this.httpOptions)
  }
  AccepterCredit(id:number) :Observable<any>{
    return this.http.get<Credit[]>("http://localhost:8082/MicroGrowth/admin/AccepterCredit/"+id,this.httpOptions);
  }
    RefuserCredit(id:number) :Observable<any>{
      return this.http.get<Credit[]>("http://localhost:8082/MicroGrowth/admin/refuserCredit/"+id,this.httpOptions);
    } 
}
