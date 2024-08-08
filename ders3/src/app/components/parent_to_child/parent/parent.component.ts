import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { merge } from 'rxjs';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  // templateUrl: './parent.component.html',
  template: `<p>parent works!</p>
    <!-- <app-child childData="alkjdsnlad"></app-child> -->
    <app-child [childData]="data"></app-child>
    `,
})
export class ParentComponent {
  data: string = 'Merhabalaradasdsa';
}
