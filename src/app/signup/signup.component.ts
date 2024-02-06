import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  SignupObj : Signup;
  constructor( private router: Router, private http: HttpClient) {
    this.SignupObj = new Signup();
  }

  navigatetohome() {
    console.log('Login Object:', this.SignupObj); // Log the login object
    console.log('Email entered:', this.SignupObj.email);
    console.log('Username entered:', this.SignupObj.username)
  console.log('Password entered:', this.SignupObj.password);
  console.log('Phonenumber entered:', this.SignupObj.phonenumber);

  this.http.post('http://127.0.0.1:5000/signup', this.SignupObj).subscribe((res: any) => {
    console.log('Server Response:', res);
    if (res.success) {
        alert('Signup Success');
        //localStorage.setItem('angular17token', res.data.token);
        this.router.navigate(['/home']);
      
    } else {
      alert(res.message);
    }
    
  });
  }

}
export class Signup {
  username: string;
  email: string;
  phonenumber: string;
  password: string;

  constructor() {
    this.username = '';
    this.email = '';
    this.phonenumber = '';
    this.password = '';
  }
}
