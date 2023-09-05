import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceOffService {

  private priceOffService = new BehaviorSubject<number | null>(null);
  currentDiscountedPrice = this.priceOffService.asObservable();

  constructor() { }

  changeDiscountedPrice(price: number): void {
    this.priceOffService.next(price);
  }
}
