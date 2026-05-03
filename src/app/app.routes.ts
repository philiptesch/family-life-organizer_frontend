import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { Auth } from './auth/auth';
import { Login } from './auth/login/login';

export const routes: Routes = [ 
     { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '',component: Login },

];
