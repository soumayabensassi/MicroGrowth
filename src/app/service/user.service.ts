import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  productURL = "http://localhost:8082/MicroGrowth/";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + ' ' + localStorage.getItem('access_token')
    })

  };
  constructor(private http: HttpClient) {

  }
  getRoles(): [] {
    const rolesString = localStorage.getItem('access_token');
    console.log("bbbb")
    
    if (rolesString !== null) {
      console.log("bbbb")
      console.log(JSON.parse(rolesString))
      return JSON.parse(rolesString);

    } else {
      return []
    }
  }
  roleMatch(allowedRoles: any): boolean {
   
    let isMatch = false;
    const userRoles: any = this.getRoles();
    if (userRoles != null && userRoles) {
      if (userRoles === allowedRoles) {
        isMatch = true
        return isMatch
      }
      else
        return isMatch
    }
    return isMatch

  }
  clear() {
    localStorage.clear()
  }
  getToken(): any {
    return localStorage.getItem('access_token')
  }
 
  isAuthenticated() {
    return this.getRoles() && this.getToken();
  }

  getUsers() {
    return this.http.get<User[]>(this.productURL + "admin/afficheruser", this.httpOptions);
  }
  getUser(id: number) {
    return this.http.get<User>(this.productURL + "/" + id);
  }
  addUser(user: User) {
    return this.http.post("http://localhost:8082/MicroGrowth/ajouteruser", user)
  }
  updateUser(id: string, user: User) {
    return this.http.put(this.productURL + "user/updateuser/" + id, user, this.httpOptions)
  }
  deleteUser(id: number) {
    return this.http.delete(this.productURL + "admin/deleteUserbyID/" + id, this.httpOptions)
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

  sendEmailpassword(email: string, user: any) {
    return this.http.post("http://localhost:8082/MicroGrowth/SendEmailForgetpassword/" + email, user)
  }

  changePAssword(email: string, token: string, password: string) {
    return this.http.get(" http://localhost:8082/MicroGrowth/email/reset/" + token + "/" + email + "/" + password)
  }




  getUserInfo(): Observable<User> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('access_token')}`);
    return this.http.get<User>('http://localhost:8082/MicroGrowth/session', { headers });
  }
  getUserbyemail(email: string) {
    return this.http.get<User>('http://localhost:8082/MicroGrowth/AfficherUserByemail/' + email);
  }

  uploadimage(formData: FormData) {

    return this.http.post('http://localhost:8082/MicroGrowth/upload-image', formData);
  }


}
