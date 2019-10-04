import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';
import { Product } from '../models/models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products: Product[];


    constructor(
    private productsService: ProductsService,

  ) {



  }
  ngOnInit() {
    this.getProducts();
  }
  getProducts(): void {
    this.productsService.getProducts().subscribe(products => this.products = products);
  }
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
