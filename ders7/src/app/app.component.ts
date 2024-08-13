import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  template: `
    <a routerLinkActive="active" [queryParams]="{ x: 3 }" routerLink="a">A</a> |
    <a
      routerLinkActive="active"
      [queryParams]="bQueryString"
      queryParamsHandling="merge"
      routerLink="b"
      >B</a
    >
    <!--  
      queryParamsHandling="preserve"
     -->
    | <a routerLinkActive="active" routerLink="home">Home</a> |
    <a routerLinkActive="active" routerLink="dashboard">Dashboard</a> |
    <a
      routerLinkActive="active"
      routerLink="about"
      [state]="{ key3: 'value3', key4: 'value4' }"
      >About</a
    >
    | <a routerLinkActive="active" routerLink="contact">Contact</a> | <br />
    <a routerLinkActive="active" routerLink="product">products</a> | <br />
    <!-- <a [routerLink]='["contact","a","b","c"]'>Contact</a> -->
    <button (click)="go()">Go</button>
    <br />
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  bQueryString: any = {
    name: 'mert',
  };
  go() {
    history.pushState({ message: 'merhaba' }, 'title', 'a/b');
  }
}
