import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { log } from 'console';

@Directive({
  selector: '[appExample]',
  // selector: 'appExample',
  standalone: true,
  // selector özelliği köşli parantez içerisinde yazılıyorsa bu attribute olarak kullanılacağı anlaına gelmektedir. "."(nokta) ile yazılıyorsa bu da class olarak ilgili directive'in kullanılacağı anlamına gelmektedir
})
export class ExampleDirective implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.element.nativeElement.style.color = this.color;
    this.element.nativeElement.style.background = this.background;
  }

  @Input() color: string = '';
  @Input() background: string = '';

  @HostListener('click') onClick() {
    console.log('clickeddd !!!');
  }

  @HostBinding('style.color') writingColor: string = 'red';
}
