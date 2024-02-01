import { Component} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SignupComponent,RouterModule,HomeComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
constructor(private router: Router){}
navigatetohome(){
  this.router.navigate(['/home']);
}
 

}
