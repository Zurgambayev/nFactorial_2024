// news-sharing.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsSharingService {
  private newsUrlSource = new BehaviorSubject<string>('');
  currentNewsUrl = this.newsUrlSource.asObservable();

  constructor() { }

  changeNewsUrl(url: string) {
    this.newsUrlSource.next(url);
  }
  
}
