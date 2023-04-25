import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Insurance } from '../Models/insurance';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsuranceServiceService {

  private apiUrl = 'http://localhost:8082/api/insurances';

  constructor(private http: HttpClient) { }

  getAllInsurances(): Observable<Insurance[]> {
    return this.http.get<Insurance[]>(this.apiUrl + "/admin/afficher-insurance" );
  }

  createInsurance(Insurance: Insurance): Observable<Insurance> {
    return this.http.post<Insurance>(this.apiUrl, Insurance);
  }

  getInsuranceById(id: number): Observable<Insurance> {
    const url = `${this.apiUrl}/admin/afficherAvecIdInsurance/${id}`;
    return this.http.get<Insurance>(url);
  }

  updateInsurance(id: number, Insurance: Insurance): Observable<Insurance> {
    const url = `${this.apiUrl}/admin/update-Insurance/${id}`;
    return this.http.put<Insurance>(url, Insurance);
  }

  deleteInsurance(id: number): Observable<any> {
    const url = `${this.apiUrl}/admin/deleteInsurance/${id}`;
    return this.http.delete(url);
  }

  calculateMonthlyPayment(loanAmount: number, interestRate: number): Observable<number> {
    const url = `${this.apiUrl}/calculate-monthly-payment?loanAmount=${loanAmount}&interestRate=${interestRate}`;
    return this.http.post<number>(url, {});
  }

  calculateMonthlyPaymentS(idS: number, TotalInsuredValue: number, Deductible: number): Observable<number> {
    const url = `${this.apiUrl}/calculate-monthly-paymentS?idS=${idS}&TotalInsuredValue=${TotalInsuredValue}&Deductible=${Deductible}`;
    return this.http.post<number>(url, {});
  }

  applyForInsuranceC(income: number, mail: string, Score: number): Observable<string> {
    const url = `${this.apiUrl}/admin/insurancerequestC?income=${income}&mail=${mail}&Score=${Score}`;
    return this.http.post<string>(url, {});
  }

  applyForInsurance(income: number, debt: number): Observable<string> {
    const url = `${this.apiUrl}/insurancerequest-KPI?income=${income}&debt=${debt}`;
    return this.http.post<string>(url, {});
  }

  calculateTotalAmount(id: number, interestRate: number): Observable<number> {
    const url = `${this.apiUrl}/calculateTotalAmount?id=${id}&interestRate=${interestRate}`;
    return this.http.post<number>(url, {});
  }

  

}
