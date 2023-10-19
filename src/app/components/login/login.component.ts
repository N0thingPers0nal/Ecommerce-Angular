import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  error = '';
  constructor(private authService: AuthService, private router: Router) {}
  onSubmit(login: NgForm) {
    // console.log(login.form.controls['password']);
    // console.log(login.form);
    if (this.authService.userValidate(login.value)) {
      
      this.router.navigate(['home'], { replaceUrl: true });
    } else {
      this.error = 'Invalid Email or Password';
    }
  }
}
