// login.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthServiceService, private router: Router) {}

  canActivate(): boolean {
  const loggedIn = this.authService.isLoggedIn();

  if (loggedIn) {
    this.router.navigate(['/change-box']);
  }

  return true;
}

}
