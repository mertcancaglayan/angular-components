import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: ` <h1>Home</h1> `,
})
export class HomeComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    var d = activatedRoute.snapshot.paramMap.has('id');
    console.log(d);
    var d2 = activatedRoute.snapshot.paramMap.has('mert');
    console.log(d2);
    var d3 = activatedRoute.snapshot.paramMap.get('mert');
    console.log(d3);
    activatedRoute.paramMap.subscribe({
      next: (param) => console.log(param.get('mert')),
    });
  }
}
