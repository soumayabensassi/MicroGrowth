import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  productURL="http://localhost:8082/MicroGrowth/";
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer'+' '+localStorage.getItem('access_token')
    })
    
  };
  constructor(private http:HttpClient) {
   
  }
  getUsers(){
   return this.http.get<User[]>(this.productURL+"admin/afficheruser");
  }
  getUser(id:number){
   return this.http.get<User>(this.productURL+"/"+id);
  }
  addUser(user:User){
   return this.http.post("http://localhost:8082/MicroGrowth/ajouteruser",user)}
  updateUser(id:number,user:User){
   return this.http.put(this.productURL+"user/updateuser",user)
  }
  deleteUser(id:number){
   return this.http.delete(this.productURL+"admin/deleteUserbyID/"+id)
  }
  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new HttpParams()
      .set('email', email)
      .set('password', password);

    return this.http.post('http://localhost:8082/MicroGrowth/login', body.toString(), { headers });
  }
  
  sendEmailpassword(email:string,user:any){
    return this.http.post("http://localhost:8082/MicroGrowth/user/password/"+email,user)}

    changePAssword(email:string,token:string,password:string){
      return this.http.get(" http://localhost:8082/MicroGrowth/user/email/reset/"+token+"/"+email+"/"+password)}
  
    
      
    
      getUserInfo(): Observable<User> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('access_token')}`);
        return this.http.get<User>('http://localhost:8082/MicroGrowth/session', { headers });
      }
      
     
   
}
