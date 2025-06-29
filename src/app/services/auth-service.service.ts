import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
   isLoggedIn(): boolean {
     const data =  !!localStorage.getItem('userId'); 
     console.log(data);
     return data
  }
}
