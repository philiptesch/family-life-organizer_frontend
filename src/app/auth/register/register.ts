import { Component } from '@angular/core';
import { Header } from '../../shared-components/header/header';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { ChildAvatar } from './child-avatar/child-avatar';
@Component({
  selector: 'app-register',
  imports: [Header, CommonModule, MatIconModule, ChildAvatar],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
passwordIconVisible: boolean = false;
passwordConfirmIconVisible: boolean = false;
childAvatarPage: boolean = false


showPassword() {
  this.passwordIconVisible = !this.passwordIconVisible

}


showConfirmPassword() {
  this.passwordConfirmIconVisible = !this.passwordConfirmIconVisible

}


showChildAvatar() {
this.childAvatarPage = !this.childAvatarPage

}


showRegisterCard(event: boolean) {
  this.childAvatarPage = event


  

}

}
