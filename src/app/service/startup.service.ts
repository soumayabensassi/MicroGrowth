import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Project}from '../Models/Project'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StartupService {
  URL="http://localhost:8082/MicroGrowth/";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + ' ' + localStorage.getItem('access_token')
    })
     };

  constructor(private http: HttpClient) { }
  getProjects(){
    return this.http.get<Project[]>(this.URL+"afficherProjet",this.httpOptions);
   }
   getProject(id:number){
    return this.http.get<Project>(this.URL+"afficherProjectbyID/"+id);
   }
   addProject(Project:Project){
    return this.http.post(this.URL+"ajouterProjet",Project,this.httpOptions)}
   updateProject(id:number,Project:Project){
    return this.http.put(this.URL+"admin/modifierProjet/"+id,Project,this.httpOptions)
   }
   deleteProject(id:number){
    return this.http.delete(this.URL+"admin/deleteProjetbyID/"+id,this.httpOptions)
   }
   stockInterest(purchasePrice: number, currentPrice: number, numShares: number, dividendYield: number, holdingPeriod: number): Observable<number> {
    return this.http.post<number>(this.URL+"stockInterest?purchasePrice="+purchasePrice+"&currentPrice="+currentPrice+"&dividendYield="+dividendYield+"&numShares="+numShares+"&holdingPeriod="+holdingPeriod,null,this.httpOptions)
}
obligationIntrest(investissementId:number,projetId:number,investissementInitial:number,tauxRendement:number): Observable<number> {
  return this.http.post<number>(this.URL+"admin/calculerRendementAnnuel/"+investissementId+"/"+projetId+"?investissementInitial="+investissementInitial+"&tauxRendement="+tauxRendement,null,this.httpOptions)
}


}
