import { Component, Self, SkipSelf } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [],
  providers: [RandomService],
  template: ` B component => {{ randomService.random }} `,
})
export class BComponent {
  constructor(@SkipSelf() public randomService: RandomService) {}
}
