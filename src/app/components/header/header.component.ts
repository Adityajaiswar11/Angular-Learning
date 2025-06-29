import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
   imports: [NgIf,RouterLink],
   standalone:true,
})
export class HeaderComponent {
  userId = localStorage.getItem('userId');

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }
}


