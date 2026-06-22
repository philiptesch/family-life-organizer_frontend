import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-partent-login',
  imports: [MatInputModule,MatFormFieldModule, MatIconModule ],
  templateUrl: './partent-login.html',
  styleUrls: ['./partent-login.scss', './checkbox-partent.login.scss']

})
export class PartentLogin {
  checkPasswordVisible:boolean = false

  constructor() {
//    this.readLoginCondition()
}

  showPassword() {
    this.checkPasswordVisible = !this.checkPasswordVisible 
    

  }

}
