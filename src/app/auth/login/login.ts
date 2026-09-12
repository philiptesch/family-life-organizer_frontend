import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Logo } from './logo/logo';
import { PartentLogin } from './partent-login/partent-login';
import { ChildLogin } from './child-login/child-login';
import {MatIconModule} from '@angular/material/icon';
import AOS from 'aos';
import { FormsModule } from '@angular/forms';
import { Header } from '../../shared-components/header/header';

@Component({
  selector: 'app-login',
  imports: [CommonModule, Logo, MatIconModule, PartentLogin, ChildLogin, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
isKidMode = false;
isChildLoginActive!: boolean
loginAnimation: boolean = false


  ngOnInit(): void {
    this.checkStorage() 


  }


  checkStorage() {
    let animation = localStorage.getItem("logoAnimation") 
    if (animation === 'true') {
    this.loginAnimation = true;

  }
  
}


toggleMode() {
  this.isChildLoginActive =! this.isChildLoginActive

}




}
