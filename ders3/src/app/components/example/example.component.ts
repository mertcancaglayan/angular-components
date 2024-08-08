import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    EXAMPLEEE <br />
    <input type="text" [(ngModel)]="data" name="exampleInput" />
    <ng-content> </ng-content>
  `,
  styleUrls: ['./example.component.css'],
})
export class ExampleComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() data: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('1. ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('2. ngOnInit');
  }

  ngDoCheck(): void {
    console.log('3. ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('4. ngaftercontentinit');
  }

  ngAfterContentChecked(): void {
    console.log('5. event');
  }

  ngAfterViewInit(): void {
    console.log('6. ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('7. ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('8. ngOnDestroy');
  }
}
