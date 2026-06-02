import { Component, OnInit, input,    effect, computed   } from '@angular/core';
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
isChildActive= input<boolean>();  

constructor() {
    this.readLoginCondition()
}

 ngOnInit() {
  this.startLogoAnimation();
  
  
    
  }

readLoginCondition() {
    effect(() => {
    this.isChildActive()
  });
}

   startLogoAnimation() {
    setTimeout(() => {
      this.changeHeightAndWidth = true
    }, 3000);

   

}
}