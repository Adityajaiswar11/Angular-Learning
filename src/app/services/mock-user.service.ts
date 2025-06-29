import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockUserService {
  //sample users datas
  private users = [
    {
      userId: 'USER1',
      password: 'Pass@12',
      profile: {
        name: 'Aditya Jaiswar',
        email: 'aditya@gmail.com',
        gender:"Male",
        address: 'Mumbai',
        contact:9152187470
      }
    },
    {
      userId: 'USER2',
      password: 'Pass@12',
      profile: {
        name: 'Rahul Yadav',
        email: 'rahul@gmail.com',
        gender:"Male",
        address: 'Mumbai',
        contact:1234567800
      }
    },
    {
      userId: 'Aman Singh',
      password: 'Pass@12',
      profile: {
        name: 'Aman Singh',
        email: 'aman@gmail.com',
        gender: "Male",
        address: 'Mumbai',
         contact:8787090350
      }
    },
     {
      userId: 'USER4',
      password: 'Pass@12',
      profile: {
        name: 'Shivame Mishra',
        email: 'shivame@gmail.com',
        gender: "Male",
        address: 'Mumbai',
         contact:8787090350
      }
    }
  ];

  //login function
  login(userId: string, password: string): boolean {
    return this.users.some(
      user => user.userId === userId && user.password === password
    );
  }

//get user by user id
  getUserProfile(userId: string) {
    const user = this.users.find(user => user.userId === userId);
    return user ? user.profile : null;
  }
}
