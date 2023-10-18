import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(
    private authService: AuthService,
    private cartService: CartService
  ) {}
  getCartCount(): number {
    return this.cartService.getCount();
  }
  logout(): void {
    this.authService.logout();
  }
}
