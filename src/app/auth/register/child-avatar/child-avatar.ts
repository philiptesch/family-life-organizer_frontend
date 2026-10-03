import { Component, inject, output , Output,EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {Router} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Child } from '../../../interfaces/child';
@Component({
  selector: 'app-child-avatar',
  imports: [CommonModule, MatIconModule, ReactiveFormsModule, FormsModule],
  templateUrl: './child-avatar.html',
  styleUrl: './child-avatar.scss',
})
export class ChildAvatar {

    formData = {
    name: '',
    password: ''
  };


  child: Child = {
  id : "",
  name: "",
  age: "",
  birthdate: "",
  gender: "",
  image: ""
  }

  returnToRegister = output<boolean>()
  @Output() childIsActive = new EventEmitter();

   private router = inject(Router);

  selectedAvatar: number | null = null;
   imageSrc: string = '/assets/img/avatar_single_1_large.png';
  file:any;


  selectAvatar(avatar: number) {
    this.selectedAvatar = avatar;
    this.imageSrc = `/assets/img/avatar_single_${avatar}_large.png`



    
}

 emitEvent() {
    this.returnToRegister.emit(false)


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
  
    onSubmit(event:Event, form: any) {

}
  
}


