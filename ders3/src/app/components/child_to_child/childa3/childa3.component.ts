import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childa3',
  standalone: true,
  imports: [],
  template: `<p>childa3 works!</p> `,
})
export class Childa3Component implements OnInit {
  ngOnInit(): void {
    this.data.emit('Child A dan gelen veri....');
  }

  @Output() data: EventEmitter<any> = new EventEmitter();
}
