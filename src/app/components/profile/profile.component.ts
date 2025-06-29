import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MockUserService } from '../../services/mock-user.service';
import { NgIf } from '@angular/common';


@Component({
   selector: 'app-profile',
   templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
   standalone: true,
   imports:[NgIf,RouterLink]
})
export class ProfileComponent implements OnInit {
  userId: string = '';
  profileData: any = null;

  constructor(
    private route: ActivatedRoute,
    private userService: MockUserService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('userId') || ''; //getting params from url
      console.log(this.userId) 
      this.profileData = this.userService.getUserProfile(this.userId);
      console.log(this.profileData) //checking user data
    });
  }
}
