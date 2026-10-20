import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-child-list',
  imports: [MatIconModule,CommonModule],
  templateUrl: './child-list.html',
  styleUrl: './child-list.scss',
})
export class ChildList {

}
