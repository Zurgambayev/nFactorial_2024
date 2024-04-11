import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { newss,newss2 } from '../news';
import { Component, Output, EventEmitter} from '@angular/core';
import {AfterViewInit} from '@angular/core';
import {OnInit} from '@angular/core';
import { HomeService } from '../home.service';
import { HttpClientModule } from '@angular/common/http';
import { NewsSharingService } from '../news-sharing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule
  ]
})
export class HomeComponent implements OnInit{
  newss: any[] = []; // Initialized as an empty array
  flag = true;
  flag2 = true;
  count = 0;
  count2 = 0;
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99,100,111,1,];
  titles = ["", "Aktualno", "Tengri Travel"]


  constructor(private homeService: HomeService, private router: Router,private newsSharingService: NewsSharingService ){ }
  @Output() newsUrlSent = new EventEmitter<string>();

  ngOnInit(): void {
    // Call your service methods here to fetch data from the backend
    this.homeService.getAllNews().subscribe(data => {
      this.newss = data;
      console.log(this.newss)
    });
    this.homeService.getAllNews().subscribe(data => {
      this.newss = data;
    });

    // Similarly, fetch newss2 or any other data you need
  }

  sendNewsUrl(newsUrl: string) {
    this.newsSharingService.changeNewsUrl(newsUrl);
  }


  navigateToComponent() {
    console.log(this.count)
    if (this.count % 2 === 0) {
      this.flag = false;
      this.flag2 = false;
    } else {
      this.flag = true;
      this.flag2 = true;
    }
    this.count++;
  }
}