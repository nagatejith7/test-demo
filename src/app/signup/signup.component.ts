import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HomeComponent, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

constructor(private router: Router){}
navigatetohome(){
  this.router.navigate(['/home']);
}

}
