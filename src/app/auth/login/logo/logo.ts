import { Component, OnInit, input, signal,    effect, computed   } from '@angular/core';
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
isChildActive = input<boolean>(false);
logoAnimation: boolean = false

constructor() {
//    this.readLoginCondition()
}

 ngOnInit() {
  this.checkStorage()
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
      this.logoAnimation = true
      localStorage.setItem('logoAnimation', 'true');

    }, 3000);

   

}


checkStorage() {

  if (!this.logoAnimation) {
   let animation = localStorage.getItem("logoAnimation") 
    if (animation === 'true') {
    this.logoAnimation = true;
    this.logoAnimation = true

    
  }


}

}
}