import { Injectable } from '@angular/core';
import { Component, inject, OnInit, signal, effect } from '@angular/core';
import { Child } from '../interfaces/child';
@Injectable({
  providedIn: 'root',
})
export class ChildService {
   
  registerSite = signal<number>(1)
  childData = signal<Child[]>([])
  selectedChild = signal<Child | null>(null);
  toggleEditAvatarSite =signal <boolean> (true)
  toggleNewChildAvatar =signal <boolean> (true)

  constructor() {
  effect(() => {
    console.log('Neue Daten:', this.childData());
  });
}

   ChangeRegisterSite(value: number) { 
    this.registerSite.set(value)
      
   }


editChildAvatar(child: Child) {
  this.selectedChild.set(child);
}

addnNewChild(child: Child) {
  this.childData.update(children => [...children, child]);
}

changeChildDaTa(child: Child) {
  this.childData.update(children =>
    children.map(childInfo => {
      if (childInfo.id === child.id) {
        return child;
      }

      return childInfo;
    })
  );
}

deleteChild(key:string) {
    this.childData.update(children =>
    children.filter(child => child.id !== key)
  );

}


   noEditChild(showEditAvatarSite:boolean) {
    this.toggleEditAvatarSite.set(showEditAvatarSite)
    console.log(this.toggleEditAvatarSite);
    
   }

   openCreateNewChild(addNewChild:boolean) {
  this.toggleNewChildAvatar.set(addNewChild)
   }

}     
