import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  curName = '';
  curEmail = '';
  curPassword = '';
  constructor(private signupService:SignupService) {}

  onSubmit(signup: NgForm):void {
    this.signupService.addUser(signup.value)
  }
}
