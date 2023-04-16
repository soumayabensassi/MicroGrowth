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
}
