import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from './product.service';
import { StorageService } from './storage.service';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  products: Product[]=[];

  constructor(
    private productService: ProductService,
    private storageService: StorageService,
    private cartService: CartService
  ) {
    // this.productService.getAllProducts().subscribe({
    //   next: (data: Product[]) => {
    //     this.storageService.loadProducts(data);
    //     this.products=storageService.getProducts();
    //     // console.log("a")
    //   },
    //   complete: () => {},
    //   error: (_error: Error) => {
    //     console.log(1);
    //   },
    // });
  }
  getProducts():Product[]{
    return this.storageService.getProducts();

  }

  addToCart(id: number): void {
    this.cartService.addToCart(id);
  }
}
