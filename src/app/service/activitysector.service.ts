import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError } from 'rxjs';
import { ActivitySector } from '../Models/activity-sector';



@Injectable({
  providedIn: 'root'
})
export class ActivitysectorService {

  private baseUrl = 'http://localhost:8082/MicroGrowth/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private httpOptions1 = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + ' ' + localStorage.getItem('access_token')
    })

  };
  constructor(
    private http: HttpClient,
  ) { }

  // Get all activity sectors
  getActivitySectors(): Observable<ActivitySector[]> {
    return this.http.get<ActivitySector[]>(`${this.baseUrl}afficherActivitySectors`,this.httpOptions1);
  }

  // Add new activity sector
  addActivitySector(activitySector: ActivitySector): Observable<ActivitySector> {
    return this.http.post<ActivitySector>(`${this.baseUrl}admin/ajouterActivitySector`, activitySector,this.httpOptions1);
  }

  // Update activity sector
  updateActivitySector(activitySector: ActivitySector): Observable<ActivitySector> {
    return this.http.put<ActivitySector>(`${this.baseUrl}admin/updateActivitySector`, activitySector,this.httpOptions1);
  }

  // Delete activity sector by id
  deleteActivitySector(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}admin/deleteActivitySector/${id}`, { responseType: 'text' });
  }

  // Get activity sector by id
  getActivitySectorById(id: number): Observable<ActivitySector> {
    return this.http.get<ActivitySector>(`${this.baseUrl}admin/AfficherActivitySectorbyID/${id}`,this.httpOptions1);
  }
}


