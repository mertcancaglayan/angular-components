import { Component } from '@angular/core';
import { Childa3Component } from '../childa3/childa3.component';
import { Childb3Component } from '../childb3/childb3.component';

@Component({
  selector: 'app-parent3',
  standalone: true,
  imports: [Childa3Component, Childb3Component],
  template: `<div style="background-color: coral;">
    <p>parent3 works!</p>
    <br />
    <app-childa3 (data)="childData($event)"> </app-childa3>
    <br />
    <app-childb3 [data]="childA2Message"> </app-childb3>
  </div>`,
})
export class Parent3Component {
  childA2Message: string = "";
  childData(message: string) {
    this.childA2Message = message;
  }
}
