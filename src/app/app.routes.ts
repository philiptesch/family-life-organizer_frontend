import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { Auth } from './auth/auth';
import { Login } from './auth/login/login';
import { Logo } from './auth/login/logo/logo';
import { Register } from './auth/register/register';

export const routes: Routes = [ 
     { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '',component: Login },
    {path: 'signUp', component: Register }

];
