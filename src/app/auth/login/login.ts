import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Logo } from './logo/logo';
import AOS from 'aos';


@Component({
  selector: 'app-login',
  imports: [CommonModule, Logo  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {


  ngOnInit(): void {

    AOS.init()
  }


}
