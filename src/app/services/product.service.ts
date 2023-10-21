import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { StorageService } from './storage.service';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private cartService: CartService
  ) {}
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
  productDetails(id: number): Product {
    let product: any = this.storageService.getProduct(id);
    return product[0];
  }
  addToCart(id: number, operator = '+'): void {
    this.cartService.addToCart(id, operator);
  }
  getProductCount(id: number): number {
    return this.cartService.getProductCount(id);
  }
  isUserLoggedIn():boolean{
    return this.storageService.isUserLoggedIn();
  }

  // getLocalProducts():Observable<Product[]>{
  //   let localProducts = this.storageService.getProducts();
  //   if(localProducts.length>0)
  //   {

  //   }
  // }
}
