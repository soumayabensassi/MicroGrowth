import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Project}from '../Models/Project'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StartupService {
  URL="http://localhost:8082/MicroGrowth/";

  constructor(private http: HttpClient) { }
  getProjects(){
    return this.http.get<Project[]>(this.URL+"afficherProjet");
   }
  /* getProject(id:number){
    return this.http.get<Project>(this.URL+"/"+id);
   }*/
   addProject(Project:Project){
    return this.http.post(this.URL+"ajouterProjet",Project)}
   updateProject(id:number,Project:Project){
    return this.http.put(this.URL+"modifierProjet",Project)
   }
   deleteProject(id:number){
    return this.http.delete(this.URL+"deleteProjetbyID/"+id)
   }
   stockInterest(purchasePrice: number, currentPrice: number, numShares: number, dividendYield: number, holdingPeriod: number): Observable<number> {
    return this.http.post<number>(this.URL+"stockInterest?purchasePrice="+purchasePrice+"&currentPrice="+currentPrice+"&dividendYield="+dividendYield+"&numShares="+numShares+"&holdingPeriod="+holdingPeriod,null)
}
obligationIntrest(investissementId:number,projetId:number,investissementInitial:number,tauxRendement:number): Observable<number> {
  return this.http.post<number>(this.URL+"calculerRendementAnnuel/"+investissementId+"/"+projetId+"?investissementInitial="+investissementInitial+"&tauxRendement="+tauxRendement,null)
}

}
