import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-logo',
  imports: [CommonModule, MatIconModule],
  templateUrl: './logo.html',
  styleUrl: './logo.scss',
})
export class Logo implements OnInit  {
changeHeightAndWidth: boolean = false


constructor() {

}

 ngOnInit() {
  this.startLogoAnimation();
    
  }


   startLogoAnimation() {
    setTimeout(() => {
      this.changeHeightAndWidth = true
    }, 3000);

   

}
}