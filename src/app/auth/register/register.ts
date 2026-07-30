import { Component } from '@angular/core';
import { Header } from '../../shared-components/header/header';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register',
  imports: [Header, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

}
