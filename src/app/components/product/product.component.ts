import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  product:any= [];
  count=0;
  id=parseInt(this.router.url.split('/')[2])
  constructor(private router: Router, private productService: ProductService) {
    
    this.product = this.productService.productDetails(this.id);
    console.log(this.product)
  
  }
  addToCart(id: number, operator = '+'): void {
    this.productService.addToCart(id, operator);
  }
  getProductCount(id: number): number {
    this.count = this.productService.getProductCount(id);
    return this.count;
  }
  isUserLoggedIn():boolean{
    return this.productService.isUserLoggedIn();
  }
  
}


