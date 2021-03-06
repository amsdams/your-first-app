import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ShippingCost, Product } from './models/models';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private shippingCostsUrl = 'api/shippingCosts';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  items: Product[] = [];

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingCosts() {
    return this.http.get<ShippingCost[]>(this.shippingCostsUrl).pipe(
      tap(_ => this.log('fetched shippingCosts')),
      catchError(this.handleError<ShippingCost[]>('getShippingCosts', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CartService: ${message}`);
  }
}
