import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [],
  template: ``,
})
export class AComponent implements OnInit {
  constructor(private activatedRouted: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRouted.queryParamMap.subscribe({
      next: (queryStringParam) => console.log(queryStringParam.get('x')),
    });
  }
}
