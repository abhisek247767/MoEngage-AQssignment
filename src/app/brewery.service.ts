// src/app/services/brewery.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {
  private apiUrl = 'http://localhost:3000/api/breweries';

  constructor(private http: HttpClient) { }

  getBreweries(query: any): Observable<any> {
    return this.http.get(this.apiUrl, { params: query });
  }

  getBrewery(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
