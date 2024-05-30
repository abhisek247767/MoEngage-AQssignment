// src/app/services/review.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'http://localhost:3000/api/reviews';

  constructor(private http: HttpClient) { }

  getReviews(breweryId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/brewery/${breweryId}`);
  }

  addReview(breweryId: string, rating: number, description: string, token: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, { breweryId, rating, description }, {
      headers: { 'x-auth-token': token }
    });
  }
}
