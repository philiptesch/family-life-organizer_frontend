import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Logo } from './logo/logo';
import {MatIconModule} from '@angular/material/icon';
import AOS from 'aos';


@Component({
  selector: 'app-login',
  imports: [CommonModule, Logo, MatIconModule  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
isKidMode = false;


  ngOnInit(): void {

    AOS.init()
  }
toggleMode() {
  this.isKidMode = !this.isKidMode;
}

}
