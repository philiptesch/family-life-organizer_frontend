import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
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

  selectedAvatar: number | null = null;
   imageSrc: string = '/assets/img/avatar_single_1.png';
  file:any;


  selectAvatar(avatar: number) {
    this.selectedAvatar = avatar;

    
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


