import { Component, NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-partent-login',
  imports: [MatInputModule,MatFormFieldModule, MatIconModule, RouterModule, FormsModule, CommonModule ],
  templateUrl: './partent-login.html',
  styleUrls: ['./partent-login.scss', './checkbox-partent.login.scss']

})
export class PartentLogin {
  checkPasswordVisible:boolean = false
  User = ({
  email: '', 
  password: ''
  })

  constructor() {
//    this.readLoginCondition()
}

  showPassword() {
    this.checkPasswordVisible = !this.checkPasswordVisible 
    

  }


  submitForm(event: Event, form:any) {
      console.log(form);
    console.log(form.form.value.name);
    console.log(event);
    console.log(this.User);
    
    

  }

}
