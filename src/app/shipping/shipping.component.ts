import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ShippingCost } from '../models/models';


@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts: ShippingCost[];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getShippingCosts();
  }
  getShippingCosts(): void {
    this.cartService.getShippingCosts().subscribe(shippingCosts => this.shippingCosts = shippingCosts);
  }

}
