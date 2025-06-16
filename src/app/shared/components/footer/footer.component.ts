import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(
    private router: Router
  ) {}

  navigate(route: string) {
    console.log("Dashboard Route: ", route)

    this.router.navigateByUrl('/' + route)
  }

  navigateAuth(route: string) {
    console.log("Dashboard Route: ", route)

    this.router.navigateByUrl('/auth/' + route)
  }
}
