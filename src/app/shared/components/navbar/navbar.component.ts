import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  mobileMenuOpen = false;

  constructor(
    private router: Router
  ) {}

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  navigate(route: string) {
    console.log("Dashboard Route: ", route)

    this.router.navigateByUrl('/' + route)
  }

  navigateAuth(route: string) {
    console.log("Dashboard Route: ", route)

    this.router.navigateByUrl('/auth/' + route)
  }
}
