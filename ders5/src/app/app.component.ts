import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './productservice';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [ProductService],
  imports: [RouterOutlet],
  template: ``,
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private productService: ProductService) {
    console.log(productService.getProducts());
    
  }
}
