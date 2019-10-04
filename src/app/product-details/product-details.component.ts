import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';
import { Product } from '../models/models';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productsService: ProductsService,
  ) {

  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.getProduct(id).subscribe(product => this.product = product);
  }

  addToCart(product: Product) {
    window.alert('Your product has been added to the cart! ' + product.name);
    this.cartService.addToCart(product);
  }

  ngOnInit() {
    this.getProduct();

  }
}
