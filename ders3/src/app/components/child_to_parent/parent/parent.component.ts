import { Component } from '@angular/core';
import { ChildComponent2 } from '../child/child.component';

@Component({
  selector: 'app-parent2',
  standalone: true,
  imports: [ChildComponent2],
  template: `
    <p>parent works!</p>
    <app-child2 (dataEvent)="childEvent($event)"></app-child2>
    <p>{{ message }}</p>
  `,
})
export class ParentComponent2 {
  message: string = '';

  childEvent(obj: any) {
    this.message = obj.message;
  }
}
