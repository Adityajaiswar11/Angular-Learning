import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ChangeBoxComponent } from './components/change-box/change-box.component';
import { authGuard } from './auth/auth.guard';
import { LoginGuard } from './auth/login.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent,canActivate:[LoginGuard]},
  { path: 'home', component: HomeComponent},
  { path: 'change-box', component: ChangeBoxComponent, canActivate: [authGuard] },
  {
  path: 'profile/:userId',
  canActivate: [authGuard],
  loadComponent: () => import('./components/profile/profile.component').then(m => m.ProfileComponent,)
},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
