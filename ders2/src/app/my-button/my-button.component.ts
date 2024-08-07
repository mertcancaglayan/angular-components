import { Component, Input } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [],
  // templateUrl: './my-button.component.html',
  template: `<button (click)="btnClick()">{{ btnText }}</button>`,
  styleUrl: './my-button.component.css',
})
export class MyButtonComponent {
  btnClick() {
    console.log('Clicked');
  }
  @Input() btnText: string = '';
}
