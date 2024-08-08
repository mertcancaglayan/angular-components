import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ExampleDirective } from './directives/example.directive';
import { CustomifDirective } from './directives/customif.directive';
import { CustomforDirective } from './directives/customfor.directive';
import {
  NgFor,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    FormsModule,
    NgFor,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    ExampleDirective,
    CustomifDirective,
    CustomforDirective,
  ],
  template: `
    <h1>{{ title }}</h1>
    <p>Hello World!</p>
    <div style="background-color: blueviolet;">
      <app-home [pageName]="title2"></app-home>
    </div>
    <input type="text" [value]="title" />
    <br />
    <!-- two way data binding -->
    <h1>{{ title3 }}</h1>
    <input type="text" [(ngModel)]="name" />
    <br />
    <input type="text" [(ngModel)]="name" />
    <br />
    {{ name }}
    <br />
    <!-- Interpolation -->
    <h1>Interpolation</h1>
    <br />
    <p>{{ person!.name }}</p>
    <br />
    <!-- Directive -->
    <h1 *ngIf="visible; else anothertitle">Directive</h1>
    <ng-template #anothertitle><h1>Another Title</h1></ng-template>
    <ul>
      <li *ngFor="let name of names; let index = index; let first = first">
        {{ name }} -- index: {{ index }} -- first: {{ first }}
      </li>
    </ul>
    <div [ngSwitch]="myNumber">
      <p *ngSwitchCase="1">Number is 1</p>
      <p *ngSwitchCase="2">Number is 2</p>
      <p *ngSwitchCase="3">Number is 3</p>
      <p *ngSwitchDefault>No number</p>
    </div>
    <!-- Custom Directive -->
    <h1>Custom Directive</h1>
    <div appExample background="pink" color="blue">merhaba</div>
    <div class="appExample">merhaba</div>
    <div *appCustomif="show">Custom IF</div>
    <button (click)="hide()">Click ME!!</button>
    <!--
    <ul>
      <li *appCustomfor="5; let i = index">Mert {{ i }}</li>
    </ul>
     -->
    <ul>
      <li *appCustomfor="names; let i = index">{{ names[i] }}</li>
    </ul>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'ders2';
  title2: string = 'Title 2';
  title3: string = 'Two Way Binding';
  name: string = '';
  person: { name: string; surname: string } = {
    name: 'Mert',
    surname: 'Caglayan',
  };
  names: string[] = ['Mert', 'Can', 'Yağmur', 'Merve', 'Buket'];
  visible: boolean = false;
  myNumber: number = 3;
  show: boolean = true;
  hide() {
    this.show = !this.show;
  }
}
