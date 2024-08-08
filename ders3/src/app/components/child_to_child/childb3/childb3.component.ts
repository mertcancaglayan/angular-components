import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childb3',
  standalone: true,
  imports: [],
  template: `<p>childb3 works! {{ data }}</p> `,
})
export class Childb3Component {
  @Input() data: string = '';
}
