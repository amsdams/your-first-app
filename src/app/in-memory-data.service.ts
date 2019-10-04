import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Product } from './models/models';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      {
        id: 0,
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens'
      },
      {
        id: 1,
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras'
      },
      {
        id: 2,
        name: 'Phone Standard',
        price: 299,
        description: ''
      }
    ];
    const shippingCosts = [
      {
        id: 0,
        type: 'Overnight',
        price: 25.99
      },
      {
        id: 1,
        type: '2-Day',
        price: 9.99
      },
      {
        id: 2,
        type: 'Postal',
        price: 2.99
      }
    ];

    return {products, shippingCosts};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 11;
  }
}
