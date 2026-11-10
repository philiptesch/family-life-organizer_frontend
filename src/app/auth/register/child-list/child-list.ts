import { Component, output,  input, effect, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Child } from '../../../interfaces/child';
import { ChildService } from '../../../services/ChildService';

@Component({
  selector: 'app-child-list',
  imports: [MatIconModule,CommonModule],
  templateUrl: './child-list.html',
  styleUrl: './child-list.scss',
})
export class ChildList {
  returnToRegister = output<number>()
  returnToAvatar = output<number>()
  public ChildService = inject(ChildService);  
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

   returnToAvatarSite() {
  this.returnToAvatar.emit(2)
  }

  addnewChild() {
    this.ChildService.ChangeRegisterSite(2)
  }


  editChildData(child:Child) {
    this.ChildService.editChildAvatar(child)
    this.returnToAvatarSite()
  }

  deleteChildData(child:Child) {
    console.log('kinds', child, child);
    
  }

}
