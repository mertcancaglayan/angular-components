import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  template: `
    <a routerLinkActive="active" routerLink="home">Home</a> |
    <a routerLinkActive="active" routerLink="about">About</a> |
    <a routerLinkActive="active" routerLink="contact">Contact</a> | <br>
    <!-- <a [routerLink]='["contact","a","b","c"]'>Contact</a> -->
    <button (click)="go()">Go</button>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  go() {
    history.pushState({ message: 'merhaba' }, 'title', 'a/b');
  }
}
