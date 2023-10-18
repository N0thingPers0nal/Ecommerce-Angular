import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  products: Product[] = [];
  // productShirts:Product["shirts"][] = [{
  //   id: 1,
  //   name: 'Cotton Shirt',
  //   price: 320,
  //   photo:
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-EBfh0qywt4Vx4v5yEXv3JbRAO_YIm2etcA&usqp=CAU',
  // },
  // {
  //   id: 1,
  //   name: 'Cotton Shirt',
  //   price: 320,
  //   photo:
  //     'https://m.media-amazon.com/images/I/6160drhh0oL._AC_SX522_.jpg',
  // },
  // {
  //   id: 1,
  //   name: 'Cotton Shirt',
  //   price: 320,
  //   photo:
  //     'https://i5.walmartimages.com/seo/CenturyX-Men-s-Long-Sleeve-Button-Up-Shirts-Solid-Slim-Fit-Casual-Business-Formal-Office-Dress-Shirt-Navy-blue-L_b6402861-145d-4822-8230-3fad976ff2ba.a98f6f7224b26a27310b49b5892e819e.jpeg',
  // }]
  // productPants:Product["pants"][] = [{
  //   id: 1,
  //   name: 'Cotton Pant',
  //   price: 320,
  //   photo:
  //     'https://5.imimg.com/data5/BO/PX/FY/SELLER-63940850/men-s-plain-pant-500x500.jpg',
  // },
  // {
  //   id: 1,
  //   name: 'Cotton Pant',
  //   price: 320,
  //   photo:
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXG1c4zRmFTZNM79HpONygmLVIsTdlaFeiHhJ3_0MJ8R0ulSr5VXQAnhI5RBeVCApWqzg&usqp=CAU',
  // },
  // {
  //   id: 1,
  //   name: 'Cotton Pant',
  //   price: 320,
  //   photo:
  //     'https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RJO0481/1-445x618.jpg',
  // }]
  // productShoes:Product["shoes"][] = [{
  //   id: 1,
  //   name: 'Black Grey Shoe',
  //   price: 320,
  //   photo:
  //     'https://cms-cdn.thesolesupplier.co.uk/2017/09/adidas-EQT-Support-ADV-91-16-Black-Grey-03_w672_h672_pad_.png.webp',
  // },
  // {
  //   id: 1,
  //   name: 'Shoe',
  //   price: 320,
  //   photo:
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnjxpAPNPdrsT4NgfY11g3WBGsW5znL8-j_Q&usqp=CAU',
  // },
  // {
  //   id: 1,
  //   name: 'Cotton Shirt',
  //   price: 320,
  //   photo:
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQceJ5pu5jxkNCa75dDrqSaVj8p6EoLJuZVvA&usqp=CAU',
  // }]
  constructor(
    private productService: ProductService,
    private storageService: StorageService,
    private cartService: CartService
  ) {
    this.productService.getAllProducts().subscribe({
      next: (data: Product[]) => {
        this.storageService.loadProducts(data);
        this.products = storageService.getProducts();
        // console.log("a")
      },
      complete: () => {},
      error: (_error: Error) => {
        console.log(1);
      },
    });
  }
  addToCart(id: number): void {
    this.cartService.addToCart(id);
  }
}
