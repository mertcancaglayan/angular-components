import { Component, Input } from '@angular/core';
import { MyButtonComponent } from '../my-button/my-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MyButtonComponent],
  // templateUrl: './home.component.html',
  template: `<p>home works!</p>
    <strong>Mert Can Caglayan</strong>
    <p>{{ pageName }}</p>
    <app-my-button [btnText]="btnText"></app-my-button>`,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @Input() pageName: string = '';
  btnText: string = 'Click ME!';
}
