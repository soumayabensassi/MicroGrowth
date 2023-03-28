import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class ConfirmeCompteService {

  constructor(private http:HttpClient) { }

  confirmeCompte(email:string,user:User)
  {
  return this.http.post("http://localhost:8082/MicroGrowth/ConfirmeCompte/"+email,user)
  }
  getUserByEmail(email:string)
  {
    return this.http.get<User>("http://localhost:8082/MicroGrowth/AfficherUserByemail/"+email)
  }
}
