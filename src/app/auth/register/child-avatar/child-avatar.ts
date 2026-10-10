import { Component, inject, output , Output,EventEmitter, input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {Router} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule,   } from '@angular/forms';
import { Child } from '../../../interfaces/child';
import { User } from '../../../interfaces/user';
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

  parent = input<User>()


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
  
    onSubmit(event:Event, ng: NgForm) {


      console.log(ng.value);
      console.log(this.child);
      console.log("PaRENT", this.parent);
      
      this.checkBirthdatAllowed(this.child.birthdate)


      ng.resetForm();
      
      

}


checkBirthdatAllowed(birthdate: string) {
  const birthDate = new Date(birthdate).getFullYear()
  console.log(birthdate);
  var now = new Date().getFullYear();
  let age = now - birthDate;

    if (age >= 5) {
    console.log("Kind ist mindestens 5 Jahre alt");
  } else {
    console.log("Kind ist jünger als 5 Jahre");
  }

}
  
}


