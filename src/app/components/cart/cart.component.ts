import { Component } from '@angular/core';
import { count } from 'rxjs';
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

  count = 0;

  allCart: Product[] = this.cartService.cartProducts();

  user = this.storageService.loggedInUser();
  // cart: Product[] =this.cartService.userCart(this.allCart);
  getCartCount(): number {
    return this.cartService.getCount();
  }
  addToCart(id: number, opertor = '+') {
    this.cartService.addToCart(id, opertor);
    this.allCart = this.cartService.cartProducts();
  }

  delete(id: number): void {
    this.allCart = this.cartService.delete(id);
  }
  checkout(): void {
    this.allCart = this.cartService.checkout();
  }
  getProductCount(id: number): number {
    this.count = this.cartService.getProductCount(id);
    return this.count;
  }
}
