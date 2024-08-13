import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, HttpClientModule],
  template: `
  <h2>products</h2>
    <ul>
      <li *ngFor="let photo of photos">
        <a [routerLink]="[photo.id]">{{ photo.url }}</a>
      </li>
    </ul>
  `,
})
export class ProductsComponent implements OnInit {
  photos: any[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.photos = data['photos'];
    });
  }
}
