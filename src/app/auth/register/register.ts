import { Component, inject, effect} from '@angular/core';
import { Header } from '../../shared-components/header/header';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { ChildAvatar } from './child-avatar/child-avatar';
import { ChildList } from './child-list/child-list';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { User } from '../../interfaces/user';
import { Child } from '../../interfaces/child';
import { ChildService } from '../../services/ChildService';

@Component({
  selector: 'app-register',
  imports: [Header, CommonModule, MatIconModule, ChildAvatar, ChildList, FormsModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

public ChildService = inject(ChildService);  
passwordIconVisible: boolean = false;
passwordConfirmIconVisible: boolean = false;
registerSiteNumber: number =1;
childData: Child[] = [] 


parentData!: User
ValueRegisterChildInfoIsEmpty: boolean = false

signUpForm  = new FormGroup({ 
  id: new FormControl<string | null>(null),
  familyName: new FormControl('', { nonNullable: true }),
  email: new FormControl('', { nonNullable: true }),
  password: new FormControl('', { nonNullable: true }),
  confirmPassword: new FormControl('', { nonNullable: true }),
 childs: new FormControl<Child[]>([], { nonNullable: true })
})



ngOnInit(): void {
console.log('childData', this.childData.length);
  
}


constructor() {
    effect(() => {

    console.log(
      'Kinderliste wurde geändert:',
      this.registerSiteNumber = this.ChildService.registerSite()
    );
      });
}



showPassword() {
  this.passwordIconVisible = !this.passwordIconVisible

}


showConfirmPassword() {
  this.passwordConfirmIconVisible = !this.passwordConfirmIconVisible

}


showChildAvatar() {
this.parentData = this.signUpForm.getRawValue();

this.ChildService.ChangeRegisterSite(2)

}


showRegisterCard(event: number) {
  this.ChildService.ChangeRegisterSite(event)


  

}


showChildAvatarList() {
  this.ChildService.ChangeRegisterSite(3)
}


showRegisterCardFromChildList(event: number) {
   this.ChildService.ChangeRegisterSite(event)



}

onSubmit() {
    console.log(this.signUpForm.value);

    this.checkChildsInfo(this.signUpForm.value.childs!);
}

checkChildsInfo(childInfo: Child[]) {

  if(childInfo.length === 0) {
    this.ValueRegisterChildInfoIsEmpty = true
    console.log(this.ValueRegisterChildInfoIsEmpty);
    
  }


}

receivedChildData(event: Child) {
console.log("tester",event);
this.signUpForm.value.childs?.push(event)
this.childData = this.signUpForm.value.childs! 
console.log('this.childData ', this.childData, "Kinder: ", this.childData.length );


}




}
