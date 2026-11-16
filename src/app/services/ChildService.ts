import { Injectable } from '@angular/core';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Child } from '../interfaces/child';
@Injectable({
  providedIn: 'root',
})
export class ChildService {
   
  registerSite = signal<number>(1)
  selectedChild = signal<Child | null>(null);
  toggleEditAvatarSite =signal <boolean> (true)

   ChangeRegisterSite(value: number) { 
    this.registerSite.set(value)
      
   }


   editChildAvatar(child: Child) {
    this.selectedChild.set(child)
   }


   noEditChild(showEditAvatarSite:boolean) {
    this.toggleEditAvatarSite.set(showEditAvatarSite)
    console.log(this.toggleEditAvatarSite);
    
   }

}     
