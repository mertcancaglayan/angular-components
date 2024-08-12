import { Component, Optional, Self } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [],
  providers: [],
  template: ` A component => {{ randomService?.random }} `,
  styleUrl: './a.component.css',
})
export class AComponent {
  constructor(@Optional() @Self() public randomService: RandomService) {}
}
