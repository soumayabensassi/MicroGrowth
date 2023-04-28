import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KPISouService {
  URL = "http://localhost:8082/MicroGrowth";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + ' ' + localStorage.getItem('access_token')
    })

  };
  constructor(private http: HttpClient) { }
  CalculRentabilité()
  {
    return this.http.get<number>(this.URL+"/admin/CalculRentabilité",this.httpOptions)
  }
  CalculRentabilitéNonActualisé()
  {
    return this.http.get<number>(this.URL+"/admin/CalculRentabilitéNonActualisé",this.httpOptions)
  }
  CalculNetInterestMarge()
  {
    return this.http.get<number>(this.URL+"/admin/CalculNetInterestMarge",this.httpOptions)
  }
  TauxDeRemboursement()
  {
    return this.http.get<number>(this.URL+"/admin/TauxDeRemboursement",this.httpOptions)
  }
  TauxDeDefaut()
  {
    return this.http.get<number>(this.URL+"/admin/TauxDeDefaut",this.httpOptions)
  }
  ReturnOnEquity()
  {
    return this.http.get<number>(this.URL+"/admin/ReturnOnEquity",this.httpOptions)
  }
  ReturnOnAssets()
  {
    return this.http.get<number>(this.URL+"/admin/ReturnOnAssets",this.httpOptions)
  }
  RevenuIInvesstisement()
  {
    return this.http.get<number>(this.URL+"/admin/RevenuIInvesstisement",this.httpOptions)
  }
  
  revenuCredit()
  {
    return this.http.get<number>(this.URL+"/admin/revenuCredit",this.httpOptions)
  }
}
