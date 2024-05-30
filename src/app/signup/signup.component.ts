// src/app/components/signup/signup.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-signup',
  imports: [
    BrowserModule, FormsModule // <<<< And here
  ],
  standalone: true,

  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  signup() {
    this.authService.signup(this.username, this.password).subscribe(
      () => this.router.navigate(['/login']),
      err => console.error(err)
    );
  }
}
