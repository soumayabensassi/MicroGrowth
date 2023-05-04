import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  ComplaintURL:string='http://localhost:8082/MicroGrowth'
  constructor(private http:HttpClient) { }


  getComplaint():Observable<Message[]>{
    return this.http.get<Message[]>(this.ComplaintURL+"/afficherC");
   }
}
