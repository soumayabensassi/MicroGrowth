import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsuranceKpiService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + ' ' + localStorage.getItem('access_token')
    })

  };
  private baseUrl = 'http://localhost:8082/MicroGrowth/'; // replace with your REST API base URL

  constructor(private http: HttpClient) { }

  // Financial KPIs
  getCustomerKPI(n: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}admin/financial/CustomerKPI/${n}`,this.httpOptions);
  }

  getCashFlowKPI(j: number, p: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}admin/financial/CashFlowKPI?j=${j}&p=${p}`,this.httpOptions);
  }

  getEPSKPI(s: number, l: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}admin/financial/EPS-KPI?s=${s}&l=${l}`,this.httpOptions);
  }

  getProfitMarginKPI(l: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}admin/financial/ProfitMarginKPI?l=${l}`,this.httpOptions);
  }

  // Insurance Agency KPIs
  getPRRKPI(g: number, h: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}admin/insurance/PRR-KPI?g=${g}&h=${h}`,this.httpOptions);
  }

  getSatisfactionKPI(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}admin/insurance/Satisfaction-KPI`,this.httpOptions);
  }
}
