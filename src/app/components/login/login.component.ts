import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MockUserService } from '../../services/mock-user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private mockUserService: MockUserService
  ) {
    this.loginForm = this.fb.group({
      userId: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]*$/)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
          Validators.pattern(/^(?=.*[!@#$*])(?!.*\s).+$/),
        ],
      ],
    });
  }

  onInputUserId() {
    const value = this.loginForm.get('userId')?.value.toUpperCase();
    this.loginForm.get('userId')?.setValue(value, { emitEvent: false });
  }

  login() {
    const { userId, password } = this.loginForm.value;
    const valid = this.mockUserService.login(userId, password); //checking credentials

    if (valid) {
      localStorage.setItem('userId', userId);
      this.router.navigate(['/change-box']);
    } else {
      this.errorMessage = 'Invalid credentials';
    }
  }
}
