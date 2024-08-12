import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(message: string): void {
    console.log(message);
  }
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private loggerService: LoggerService) {}

  getProducts(): Product[] {
    this.loggerService.log('Fetching products');
    return [
      { name: 'keyboard', quantity: 25 },
      { name: 'mouse', quantity: 15 },
      { name: 'screen', quantity: 20 },
    ];
  }
}

export interface Product {
  name: string;
  quantity: number;
}
