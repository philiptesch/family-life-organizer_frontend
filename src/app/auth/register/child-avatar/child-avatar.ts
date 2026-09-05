import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {Router} from '@angular/router';

@Component({
  selector: 'app-child-avatar',
  imports: [CommonModule, MatIconModule],
  templateUrl: './child-avatar.html',
  styleUrl: './child-avatar.scss',
})
export class ChildAvatar {

    formData = {
    name: '',
    password: ''
  };

   private router = inject(Router);

  selectedAvatar: number | null = null;
   imageSrc: string = '/assets/img/avatar_single_1_large.png';
  file:any;


  selectAvatar(avatar: number) {
    this.selectedAvatar = avatar;
    this.imageSrc = `/assets/img/avatar_single_${avatar}_large.png`



    
}


navigateToLogin() {
    this.router.navigate(['']);

}

  onFileSelected(event: any): void {
    this.file = event.target.files[0];
    console.log(this.file);
    if (this.file) {
    this.imageSrc = URL.createObjectURL(this.file);
    




}

  }


  addAvata() {

  }



  uploadToBackend() {



  }

  
}


