import { HomeService } from '../home.service';
import { Component, Input } from '@angular/core'; // First, import Input

@Component({
  selector: 'app-news1',
  standalone: true,
  imports: [],
  templateUrl: './news1.component.html',
  styleUrl: './news1.component.css'
})
export class News1Component {

  constructor(private homeService: HomeService) {}
  @Input() newsUrl: string = '';
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
    if (this.newsUrl) {
      console.log(this.newsUrl); 
    }
  }
}
