import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Logo } from './logo/logo';

@Component({
  selector: 'app-login',
  imports: [CommonModule, Logo  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

}
