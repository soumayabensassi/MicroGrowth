import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Credit } from '../Models/credit';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CreditService {

  constructor(private http: HttpClient) { }
  AfficherCredit() :Observable<any>{
    return this.http.get<Credit[]>("http://localhost:8082/MicroGrowth/admin/afficherCredits");
  }
  addCreditByUser(credit : Credit):Observable<any> {
    return this.http.post<Credit>("http://localhost:8082/MicroGrowth/user/ajouterCreditByuser",Credit)
  }
  addCreditByAdmin(credit : Credit):Observable<any>
  {
    return this.http.post<Credit>("http://localhost:8082/MicroGrowth/admin/ajouterCreditByadmin",Credit)
  }
  AfficherCreditPack() :Observable<any>{
    return this.http.get<Credit[]>("http://localhost:8082/MicroGrowth/user/afficherPacks");
  }
GetCreditById(id:number) :Observable<any>{
  return this.http.get<Credit[]>("http://localhost:8082/MicroGrowth/user/afficherCreditbyID/"+id);
}
  
  
}
