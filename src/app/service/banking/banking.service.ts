import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankingService {
  productURLAdmin = "http://localhost:8082/MicroGrowth/admin/";
  productURLUser = "http://localhost:8082/MicroGrowth/user/";
  constructor(private http:HttpClient) { }

  getAccountsBanking() {
    return this.http.get(this.productURLAdmin + "showBankAccount");
  }
  getAccountBankingbyIDBank(id:any) {
    return this.http.get(this.productURLAdmin + "showBankAccount"+"/"+id);
  }
  delete(id:number)
  {
    return this.http.delete(this.productURLAdmin+"deleteBankAccount/"+id);
  }
  update(data: any) {
    const url = `${this.productURLAdmin}updateBankAccount`;
    return this.http.put(url, data);
}
  getAccountByidUser(id:number)
  {
    return this.http.get(this.productURLAdmin+"showBankAccountbyuser/"+id);
  }
  makeTransfer(data: any) {
    const url = `${this.productURLUser}makeTransfer`;
    return this.http.post(url, data);
  }
  download(rib: string, startStr: string, endStr: string): Observable<Blob> {
    const url = `${this.productURLUser}export/pdf?Rib=${rib}&Date1=${startStr}&Date2=${endStr}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // @ts-ignore
    return this.http.get(url, { headers, responseType: 'blob', observe: 'response' }).pipe(
      map((response: HttpResponse<Blob>) => {
        return response.body;
      })
    );
  }

}
