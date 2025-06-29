import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const isAuthenticated :boolean = !!localStorage.getItem('userId'); // true or false

  if (!isAuthenticated) {
    router.navigate(['/login']);
    return false;
  }


  return true;
};
