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
  childData: Child[] = [] 
  

  constructor() {
    effect(() => {
      console.log("KinderListet:", this.ChildService.childData());
      this.childData= this.ChildService.childData()
      for (let index = 0; index < this.childData.length; index++) {
        const element = this.childData[index].name;
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
    this.openNewChildSection()
  }


  editChildData(child:Child) {
    this.ChildService.editChildAvatar(child)
    this.ChildService.noEditChild(true)
    this.returnToAvatarSite()
  }

  

  deleteChildData(key: string) {
    this.ChildService.deleteChild(key)
    
  }

  openNewChildSection() {
  this.ChildService.openCreateNewChild(false)
  }

}
