import { Component, inject, output , Output,EventEmitter, input, effect} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {Router} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule,   } from '@angular/forms';
import { Child } from '../../../interfaces/child';
import { User } from '../../../interfaces/user';
import { ChildService } from '../../../services/ChildService';
import { nanoid } from 'nanoid';
import { runEffect } from '@angular/core/primitives/signals';

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

  public ChildService = inject(ChildService);  
  returnToRegister = output<number>()
  @Output() childIsActive = new EventEmitter();
  childData = output<Child>();
  newChildHasBeenAdded: boolean = false

   private router = inject(Router);

  selectedAvatar: number | null = null;
   imageSrc: string = '/assets/img/avatar_single_1_large.png';
  file:any;


  selectAvatar(avatar: number) {
    this.selectedAvatar = avatar;
    this.imageSrc = `/assets/img/avatar_single_${avatar}_large.png`



    
}


constructor() {
  this.reactedOfEditChild()
  this.ReactToAddNewchild()
}



reactedOfEditChild() {
  effect(() => {
    const isToggleEdit = this.ChildService.toggleEditAvatarSite();
    console.log("toggleListe:", isToggleEdit);
    if (!isToggleEdit) {
      return; 
    }
    const selectedChild = this.ChildService.selectedChild();
    console.log("KinderListet:", selectedChild);

    if (selectedChild !== null) {
      this.child = { ...selectedChild };
      console.log('neues Child', this.child);
    }
  });
}

ReactToAddNewchild() {
    effect(() => {
    const checkNewChild = this.ChildService.toggleNewChildAvatar();
    if (checkNewChild) {
      this.child = this.createEmptyChild()
    }

  });
}

createEmptyChild() {
    return {
    id: '',
    name: '',
    age: '',
    birthdate: '',
    gender: '',
    image: this.imageSrc
  };
}



 emitEvent() {
    this.returnToRegister.emit(1)


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

      if (this.child.id == "" ) { 
         this.child.image = this.checkImage(this.child.image)
          console.log(ng.value);
          console.log('this.child.image', this.child.image);
          this.child.id = this.generateRandomIDTest()
          console.log(this.child.id);
          console.log("PaRENT", this.parent);
          this.checkBirthdatAllowed(this.child.birthdate)
          this.newChildHasBeenAdded =true
          setTimeout(() => {
          this.childInfoToRegister(this.child)
          this.newChildHasBeenAdded =false
          ng.resetForm();
          this.emitEvent()
          }, 2000);

      
      }  else {
          console.log("Array vorher:", this.ChildService.childData());
          this.child.image = this.checkImage(this.child.image)
          console.log('this.child.image', this.child.image);
          
          this.changeChildData(ng)

      }

}

checkImage(image: string): string {
  console.log('Original:', image);
  console.log('Enthält large:', image.includes('large'));
  const imageStart = '/assets/img/avatar_single_';

  if (image.startsWith(imageStart)) {
    return image.replace('large', 'small');
  }

  return image;
}


changeChildData(form: NgForm) {

  const updatedChild = { ...this.child };

  console.log('Kind vor Update:', updatedChild);

  this.ChildService.editChildAvatar(updatedChild);
  this.ChildService.changeChildDaTa(updatedChild);

  console.log('Array nachher:', this.ChildService.childData());

  this.newChildHasBeenAdded = true;

  setTimeout(() => {
    this.newChildHasBeenAdded = false;
    form.resetForm();
    this.emitEvent();
  }, 2000);
}


reactToNewChildData() {
    effect(() => {
    const child = this.ChildService.childData();
    console.log("child:", child);
    
    });
  }

generateRandomIDTest() {
return nanoid(10);


}


childInfoToRegister(child: Child) {
this.childData.emit(child);

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


