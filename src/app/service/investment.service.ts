import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Investment } from '../Models/investment';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  URL="http://localhost:8082/MicroGrowth/"
  constructor(private http: HttpClient) { }
  getInvestments(){
    return this.http.get<Investment[]>(this.URL+"/afficherProjet");
   }
  /* getProject(id:number){
    return this.http.get<Project>(this.URL+"/"+id);
   }*/
   addInvestment(Investment:Investment){
    return this.http.post(this.URL+"/admin/ajouterProjet",Investment)}
   updateProject(id:number,Investment:Investment){
    return this.http.put(this.URL+"/admin/modifierProjet",Investment)
   }
   deleteProject(id:number){
    return this.http.delete(this.URL+"/admin/deleteProjetbyID"+id)
   }
   
}
