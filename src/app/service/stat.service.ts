import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'src/assets/Back/vendors/tinymce/tinymce';
@Injectable({
  providedIn: 'root'
})
export class StatService {

  URL = "http://localhost:8082/MicroGrowth";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + ' ' + localStorage.getItem('access_token')
    })

  };
  constructor(private http: HttpClient) { }
  Calcultauxsatifait() 
  {
    return this.http.get<number>(this.URL+"/admin/tauxsatisfait",this.httpOptions)
    
  }
  Calcultauxinsatifait()
  {
    return this.http.get<number>(this.URL+"/admin/tauxinsatisfait",this.httpOptions)
  }
  
}
