import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-partent-login',
  imports: [MatInputModule,MatFormFieldModule ],
  templateUrl: './partent-login.html',
  styleUrl: './partent-login.scss',
})
export class PartentLogin {

}
