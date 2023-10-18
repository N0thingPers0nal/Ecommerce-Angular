import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  constructor(
    private storageService: StorageService,
    private cartService: CartService
  ) {}
  getCartCount(): number {
    return this.cartService.getCount();
  }

  allCart: Product[] = this.cartService.cartProducts();

  user = this.storageService.loggedInUser();
  // cart: Product[] =this.cartService.userCart(this.allCart);

  delete(id: number): void {
    this.allCart = this.cartService.delete(id);
  }
  checkout(): void {
    this.allCart = this.cartService.checkout();
  }
}
