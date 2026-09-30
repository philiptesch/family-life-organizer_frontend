import { Component } from '@angular/core';
import { Header } from '../../shared-components/header/header';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { ChildAvatar } from './child-avatar/child-avatar';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { User } from '../../interfaces/user';
import { Child } from '../../interfaces/child';

@Component({
  selector: 'app-register',
  imports: [Header, CommonModule, MatIconModule, ChildAvatar,FormsModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
passwordIconVisible: boolean = false;
passwordConfirmIconVisible: boolean = false;
childAvatarPage: boolean = false

signUpForm  = new FormGroup({ 
  id: new FormControl(''),
  familyName: new FormControl(''),
  email: new FormControl(''),
  passsword: new FormControl(''),
  confirmPassword: new FormControl(''),
 childs: new FormControl<Child[]>([])
})


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

onSubmit() {
    console.log(this.signUpForm.value)
}

}
