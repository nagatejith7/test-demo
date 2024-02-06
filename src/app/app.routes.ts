import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CandlestickComponent } from './candlestick/candlestick.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path: 'home', component: HomeComponent},
  {path:'candlestick', component: CandlestickComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],

})
export class AppRoutingModule{} 


