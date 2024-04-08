import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { newss } from '../news';
import { Component} from '@angular/core';
import {AfterViewInit} from '@angular/core';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class HomeComponent{

  newss = [...newss];
  constructor(private router : Router) { }
  flag = true;
  count = 0;
  count2 = 0
  array =  [1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88,99]

  // ngOnInit(): void {
  //   this.su();
  // }
  // su(){
  //   this.count2 += 1 
  //   // for (let i of this.newss) {
  //   //   console.log(i);
  //   // }
  //   console.log(this.count2)
  // }
  navigateToComponent() {
    console.log(this.count)
    if (this.count % 2 === 0){
      this.flag = false 
    }else{
      this.flag = true
    }
    this.count++;
  }
}