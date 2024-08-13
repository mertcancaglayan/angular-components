import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-iletisim',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  template: `İletişim Sayfası <br />
    <a routerLink="tel">Tel</a> |
    <a routerLink="mail">Mail</a> <br>
    <router-outlet></router-outlet> `,
})
export class IletisimComponent {}
