import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router:Router, private authService: AuthService ){}

  email= new FormControl("",[
    Validators.required,
    Validators.email,
  ])

  password = new FormControl("",[
    Validators.required,
    Validators.minLength(8),
    // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'),
  ])

  loginForm= new FormGroup({
    email: this.email,
    password: this.password
  })
  login(){
    this.authService.loginUser(this.loginForm.value.email!, this.loginForm.value.password!)
    // submit form to server here
  }
  reset(){
    this.loginForm.reset()
    this.email.markAsUntouched()
    this.password.markAsUntouched()
  }
}
