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

  constructor(
    private http: HttpClient,
  ) { }

  // Get all activity sectors
  getActivitySectors(): Observable<ActivitySector[]> {
    return this.http.get<ActivitySector[]>(`${this.baseUrl}admin/afficherActivitySectors`);
  }

  // Add new activity sector
  addActivitySector(activitySector: ActivitySector): Observable<ActivitySector> {
    return this.http.post<ActivitySector>(`${this.baseUrl}admin/ajouterActivitySector`, activitySector);
  }

  // Update activity sector
  updateActivitySector(activitySector: ActivitySector): Observable<ActivitySector> {
    return this.http.put<ActivitySector>(`${this.baseUrl}admin/updateActivitySector`, activitySector);
  }

  // Delete activity sector by id
  deleteActivitySector(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}admin/deleteActivitySector/${id}`, { responseType: 'text' });
  }

  // Get activity sector by id
  getActivitySectorById(id: number): Observable<ActivitySector> {
    return this.http.get<ActivitySector>(`${this.baseUrl}admin/AfficherActivitySectorbyID/${id}`);
  }
}


