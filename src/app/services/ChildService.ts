import { Injectable } from '@angular/core';
import { Component, inject, OnInit, signal } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ChildService {
   
   registerSite = signal<number>(1)


   ChangeRegisterSite(value: number) { 
    this.registerSite.set(value)
      
   }
}     
