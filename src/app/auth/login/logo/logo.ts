import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  imports: [CommonModule],
  templateUrl: './logo.html',
  styleUrl: './logo.scss',
})
export class Logo {
changeHeightAndWidth: boolean = false


constructor() {
this.startLogoAnimation();
}
   startLogoAnimation() {
    setTimeout(() => {
      this.changeHeightAndWidth = true
    }, 3000);

   

}
}