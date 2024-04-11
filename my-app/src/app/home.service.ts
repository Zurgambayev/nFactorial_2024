import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  getNewsFromJson(jsonFilePath: string): Observable<any[]> {
    return this.http.get<any[]>(jsonFilePath);
  }

  private apiUrl = 'http://0.0.0.0:8000/pages/'; // Replace this with your actual backend API URL

  constructor(private http: HttpClient) { }

  // Fetch all news
  getAllNews(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Fetch news by id
  getNewsByUrl(newsUrl: string): Observable<any> {
    const url = `${this.apiUrl}detail/?url=${encodeURIComponent(newsUrl)}`;
    return this.http.get<any>(url);
  }


}
