import { Injectable } from '@angular/core';
import { Users } from '../models/users';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private router: Router,private storageService:StorageService) {}
  addUser(newUser:Users) {
    let user: Users[]  = [
      {
        id:this.storageService.getAllUsers().length+1 ,
        name: newUser.name,
        email: newUser.email,
        password:newUser.password,
      },
    ];
    let users = JSON.parse(localStorage.getItem('users') as string);
    users = [...users, ...user];
    localStorage.setItem('users', JSON.stringify(users));
    this.router.navigate(['login'], { replaceUrl: true }); 
  }
}
