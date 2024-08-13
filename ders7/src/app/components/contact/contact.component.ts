import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  template: `
    <h1>Contact</h1>
    <a routerLinkActive="active" routerLink="iletisim/2">iletisim</a> | <br />
    <router-outlet></router-outlet>
  `,
})
export class ContactComponent {}
