import { Injectable } from '@angular/core';
import { Users } from '../models/users';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
  private users: Users[] = [
    { id: 1, name: 'user1', email: 'user@gmail.com', password: 'asdf' },
  ];

  loadUsers(): void {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }
  getAllUsers(): Users[] {
    return JSON.parse(localStorage.getItem('users') as string);
  }
  setLoggedInUser(user: Users): void {
    return sessionStorage.setItem('curUsers', JSON.stringify(user));
  }
  logout() {
    sessionStorage.removeItem('curUsers');
  }
  isUserLoggedIn(): boolean {
    return sessionStorage.getItem('curUsers') !== null;
  }
  loadProducts(products: Product[]): void {
    localStorage.setItem('products', JSON.stringify(products));
  }
  getProducts():Product[]{
    return JSON.parse(localStorage.getItem('products') as string)
  }
  loggedInUser(): Users {
    return JSON.parse(sessionStorage.getItem('curUsers') as string);
  }
  setCart(): void {
    localStorage.setItem('cart', JSON.stringify([]));
  }
  loadCartProducts(cart: Product[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  getCartProducts():Product[]{
    return JSON.parse(localStorage.getItem('cart') as string)
  }
}
