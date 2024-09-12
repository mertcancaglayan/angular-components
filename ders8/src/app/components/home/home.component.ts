import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products = [
    { productName: 'Pencil', available: true },
    { productName: 'Notebook', available: true },
    { productName: 'Duster', available: false },
    { productName: 'Book', available: true },
    { productName: 'Table', available: false },
    { productName: 'Bin', available: true },
  ];
}
