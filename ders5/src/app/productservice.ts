import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): Product[] {
    return [
      { name: 'keyboard', quantity: 25 },
      { name: 'mouse', quantity: 15 },
      { name: 'screen', quantity: 20 },
    ];
  }
}

export class Product {
  name!: string;
  quantity!: number;
}
