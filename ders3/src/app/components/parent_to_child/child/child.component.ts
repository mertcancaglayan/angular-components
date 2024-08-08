import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  // templateUrl: './child.component.html',
  template: `<p>child works!</p>
    <p>{{ childData }}</p> `,
})
export class ChildComponent {
  @Input() childData: string = '';
}
