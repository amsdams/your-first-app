import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerData, Product } from '../models/models';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items: Product[];
  checkoutForm: FormGroup;
    constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.items = this.cartService.getItems();



    this.checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(customerData: CustomerData) {
    // Process checkout data here
    if (this.checkoutForm.valid) {
      console.warn('Your order has been submitted', customerData);

      this.items = this.cartService.clearCart();
      this.checkoutForm.reset();
    }else{
      window.alert('checkoutForm is not valid');
    }
  }
}
