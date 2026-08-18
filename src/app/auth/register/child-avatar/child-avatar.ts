import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-child-avatar',
  imports: [CommonModule, MatIconModule],
  templateUrl: './child-avatar.html',
  styleUrl: './child-avatar.scss',
})
export class ChildAvatar {

}
