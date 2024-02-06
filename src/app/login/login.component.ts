
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj: Login;

  constructor(private http: HttpClient, private router: Router) {
    this.loginObj = new Login();
  }

  login() {
    console.log('Login Object:', this.loginObj); // Log the login object
    console.log('Email entered:', this.loginObj.email);
  console.log('Password entered:', this.loginObj.password);

    this.http.post('http://127.0.0.1:5000/verify_login', this.loginObj).subscribe((res: any) => {
      console.log('Server Response:', res);
      if (res.success) {
          alert('Login Success');
          //localStorage.setItem('angular17token', res.data.token);
          this.router.navigate(['/home']);
        
      } else {
        alert(res.message);
      }
      
    });
  }
}

export class Login {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}

