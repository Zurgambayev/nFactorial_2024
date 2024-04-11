import { HomeService } from '../home.service';
import { Component, OnInit } from '@angular/core'; // First, import Input
import { NewsSharingService } from '../news-sharing.service';

@Component({
  selector: 'app-news1',
  standalone: true,
  imports: [],
  templateUrl: './news1.component.html',
  styleUrl: './news1.component.css'
})
export class News1Component  implements OnInit{
  newsUrl: string = '';
  newss2: any;
  constructor(private homeService: HomeService ,private newsSharingService: NewsSharingService) {}

  ngOnInit(): void {
    this.newsSharingService.currentNewsUrl.subscribe(url => {
      this.newsUrl = url;
      this.loadNewsFromJson();
    });
    this.newsSharingService.currentNewsUrl.subscribe(url => this.newsUrl = url);
    if (this.newsUrl) {
      this.homeService.getNewsByUrl(this.newsUrl).subscribe(
        (data) => {
          this.newss2 = data
          console.log(data); 
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
    const newsUrl = this.newsUrl; 
    this.homeService.getNewsByUrl(newsUrl).subscribe(
      (data) => {
        this.newss2 = data;
        console.log(data); 
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  
  }
  loadNewsFromJson(): void {

    const jsonFilePath = '/Users/zeinaddinzurgambayev/Desktop/nFactorial2024/parser/parsed_data_detail.json';

   
    const newsObservable = this.homeService.getNewsFromJson(jsonFilePath); 

    newsObservable.subscribe( 
      (data: any) => {

        this.newss2 = data;
        console.log(data); 
      }
    );
  }
}
