import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TransactionserviceService {
  productURLAdmin = "http://localhost:8082/MicroGrowth/admin/";

  constructor(private http:HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + ' ' + localStorage.getItem('access_token')
    })

  };

  deleteTransaction(id:number)
  {
    return this.http.delete(this.productURLAdmin+"deleteTransaction/"+id,this.httpOptions);
  }
  getTransactions() {
    return this.http.get(this.productURLAdmin + "showTransaction",this.httpOptions);
  }
}
