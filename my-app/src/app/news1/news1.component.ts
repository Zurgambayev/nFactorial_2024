import { Component } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-news1',
  standalone: true,
  imports: [],
  templateUrl: './news1.component.html',
  styleUrl: './news1.component.css'
})
export class News1Component {

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    const newsUrl = 'hnewsttp://example.com/'; // Replace with the actual news URL
    this.homeService.getNewsByUrl(newsUrl).subscribe(
      (data) => {
        console.log(data); // Handle the data received from the backend
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
