import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Users } from '../models/users';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storageService: StorageService,private router:Router) {}
  userValidate(user: Users): boolean {
    let users = this.storageService.getAllUsers();
    // let isUser: boolean = false;
    for (let currentuser of users) {
      if (
        currentuser.email === user.email &&
        currentuser.password === user.password
      ) {
        this.storageService.setLoggedInUser(currentuser)
        // console.log(currentuser)
        return true;
      }
    }
    return false;
  }
  logout():void{
    this.storageService.logout()
    this.router.navigate(['login'],{replaceUrl:true})
  }
  isLoggedIn(): boolean {
    return this.storageService.isUserLoggedIn();
  }
 
}
