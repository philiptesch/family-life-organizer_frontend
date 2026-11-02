import { Component, output,  input, effect } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Child } from '../../../interfaces/child';


@Component({
  selector: 'app-child-list',
  imports: [MatIconModule,CommonModule],
  templateUrl: './child-list.html',
  styleUrl: './child-list.scss',
})
export class ChildList {
  returnToRegister = output<number>()

  childData = input<Child[]>([]);


  constructor() {
    effect(() => {
      console.log("KinderListet:", this.childData());
      let child = this.childData()
      for (let index = 0; index < child.length; index++) {
        const element = child[index].name;
        console.log(element);
        
      }
    });
  }

  goToRegister() {
  this.returnToRegister.emit(1)
  }

}
