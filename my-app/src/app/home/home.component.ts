import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Используйте styleUrls вместо styleUrl
  standalone: true,
  imports: [
    RouterModule ]
})
export class HomeComponent {
  constructor(private router: Router) { }

  navigateToComponent() {
    // Навигация к другому компоненту
    this.router.navigate(['/about']);
  }
}
