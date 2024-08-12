import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoggerService, ProductService } from './productservice';
import { PRODUCT_SERVICE_TOKEN } from './injection-token';
import { log } from 'console';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { RandomService } from './random.service';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // providers: [{ provide: ProductService, useClass: ProductService }],
  // providers: [{ provide: 'ProductService', useClass: ProductService }],
  imports: [RouterOutlet, HttpClientModule, AComponent, BComponent],
  template: `App Component {{ randomService.random }}
    <br />
    <app-a />
    <br />
    <app-b /> `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  // constructor(
  //   private productService: ProductService,
  //   @Inject('example') func: any
  // ) {
  //   console.log(productService.getProducts());
  //   console.log(func());
  // }
  // constructor(
  //   @Inject('productService') private productService: ProductService
  // ) {
  //   this.productService.getProducts().subscribe(data => {
  //     console.log(data);
  //   });
  // }
  constructor(public randomService: RandomService) {}
}
