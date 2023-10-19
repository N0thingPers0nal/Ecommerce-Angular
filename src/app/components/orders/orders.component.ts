import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { OrderService } from 'src/app/services/order.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
})
export class OrdersComponent {
  constructor(
    private storageService: StorageService,
    private orderService: OrderService
  ) {}
 
  allOrders: Product[] = this.storageService.getOrderProducts();
  count = this.orderService.getCount();
}
