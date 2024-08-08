import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  template: `<p>child works!</p> `,
})
export class ChildComponent2 implements OnInit {
  ngOnInit(): void {
    this.dataEvent.emit({ message: 'Hello' });
  }

  @Output() dataEvent: EventEmitter<any> = new EventEmitter();
}
