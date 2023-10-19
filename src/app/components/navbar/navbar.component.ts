import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private storageService: StorageService,
    private router: Router
  ) {}

  user(): boolean {
    return this.storageService.isUserLoggedIn();
  }
  getCartCount(): number {
    return this.cartService.getCount();
  }
  logout(): void {
    this.authService.logout();
  }
  navBar(): boolean {
    return this.router.url !== '/';
  }
}
