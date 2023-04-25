import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Project}from '../Models/Project'
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

}
