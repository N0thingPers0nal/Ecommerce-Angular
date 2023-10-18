import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private storageService: StorageService) {
    if(!storageService.getOrderProducts()){
      storageService.setOrder();
    }
  }
  orders(product: Product[]): Product[] {
    let orders: Product[] = this.storageService.getOrderProducts();
    orders = [...orders, ...product];
    this.storageService.loadOrderProducts(orders);

    return this.storageService.getOrderProducts().filter((product)=>this.storageService.loggedInUser().id===product.userid);
  }
  getCount():number{
    
    return this.storageService.getOrderProducts().filter((product)=>this.storageService.loggedInUser().id===product.userid).length
  }
}
