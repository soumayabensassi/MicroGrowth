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

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + ' ' + localStorage.getItem('access_token')
    })

  };
  getAccountsBanking() {
    return this.http.get(this.productURLAdmin + "showBankAccount",this.httpOptions);
  }
  getAccountBankingbyIDBank(id:any) {
    return this.http.get(this.productURLAdmin + "showBankAccount"+"/"+id,this.httpOptions);
  }
  delete(id:number)
  {
    return this.http.delete(this.productURLAdmin+"deleteBankAccount/"+id,this.httpOptions);
  }
  update(data: any) {
    const url = `${this.productURLAdmin}updateBankAccount`;
    return this.http.put(url, data,this.httpOptions);
}
  getAccountByidUser(id:number)
  {
    return this.http.get(this.productURLUser+"showBankAccountbyuser/"+id,this.httpOptions);
  }
  makeTransfer(data: any) {
    const url = `${this.productURLUser}makeTransfer`;
    return this.http.post(url,data,this.httpOptions);
  }
  download(rib: string, startStr: string, endStr: string): Observable<Blob> {
    const url = `http://localhost:8082/MicroGrowth/export/pdf?Rib=${rib}&Date1=${startStr}&Date2=${endStr}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // @ts-ignore
    return this.http.get(url, { headers, responseType: 'blob', observe: 'response' }).pipe(
      map((response: HttpResponse<Blob>) => {
        return response.body;
      })
    );
  }

}
