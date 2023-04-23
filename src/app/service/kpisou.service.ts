import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KPISouService {
  URL = "http://localhost:8082/MicroGrowth";
  constructor(private http: HttpClient) { }
  CalculRentabilité()
  {
    return this.http.get<number>(this.URL+"/admin/CalculRentabilité")
  }
  CalculRentabilitéNonActualisé()
  {
    return this.http.get<number>(this.URL+"/admin/CalculRentabilitéNonActualisé")
  }
  CalculNetInterestMarge()
  {
    return this.http.get<number>(this.URL+"/admin/CalculNetInterestMarge")
  }
  TauxDeRemboursement()
  {
    return this.http.get<number>(this.URL+"/admin/TauxDeRemboursement")
  }
  TauxDeDefaut()
  {
    return this.http.get<number>(this.URL+"/admin/TauxDeDefaut")
  }
  ReturnOnEquity()
  {
    return this.http.get<number>(this.URL+"/admin/ReturnOnEquity")
  }
  ReturnOnAssets()
  {
    return this.http.get<number>(this.URL+"/admin/ReturnOnAssets")
  }
  RevenuIInvesstisement()
  {
    return this.http.get<number>(this.URL+"/admin/RevenuIInvesstisement")
  }
  
  revenuCredit()
  {
    return this.http.get<number>(this.URL+"/admin/revenuCredit")
  }
}
