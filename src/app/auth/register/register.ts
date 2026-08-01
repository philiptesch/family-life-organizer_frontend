import { Component } from '@angular/core';
import { Header } from '../../shared-components/header/header';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-register',
  imports: [Header, CommonModule, MatIconModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
passwordIconVisible: boolean = false;
passwordConfirmIconVisible: boolean = false;



showPassword() {
  this.passwordIconVisible = !this.passwordIconVisible

}


showConfirmPassword() {
  this.passwordConfirmIconVisible = !this.passwordConfirmIconVisible

}


}
