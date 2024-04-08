import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Используйте styleUrls вместо styleUrl
  standalone: true,
  imports: [
    RouterModule,
     CommonModule]
})
export class HomeComponent {
  constructor(private router : Router) { }
  flag = true;
  flag2 = true;
  count = 0;
  navigateToComponent() {
    // Навигация к другому компоненту
    // this.router.navigate(['/about']);
    console.log(this.count)
    if (this.count % 2 === 0){
      this.flag = false 
    }else{
      this.flag = true
    }
    this.count++;
  }
}