import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UpperCasePipe, SlicePipe } from '@angular/common';
import { CustomPipe } from './pipes/custom.pipe';
import { log } from 'console';
import { ParentComponent } from './components/parent_to_child/parent/parent.component';
import { ParentComponent2 } from './components/child_to_parent/parent/parent.component';
import { Parent3Component } from './components/child_to_child/parent3/parent3.component';
import { ExampleComponent } from './components/example/example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UpperCasePipe,
    SlicePipe,
    CustomPipe,
    ParentComponent,
    ParentComponent2,
    Parent3Component,
    ExampleComponent,
  ],
  // templateUrl: './app.component.html',
  template: `{{ name | uppercase }} {{ name | slice : 1 : 3 }}
    {{ 'lorem ipsum dolor, acementes dorimatus' | customPipe : 10 : 20 }}
    <app-parent></app-parent>
    <hr />
    <app-parent2> </app-parent2>
    <hr />
    <app-parent3> </app-parent3>
    <br />
    <hr />
    <br />
    <app-example data="merhabaşlakmdşlassd">mmaamammamammamamamama</app-example>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private customPipe: CustomPipe) {
    console.log(customPipe.transform('asdajdşadaadad', 5, 15));
  }
  title = 'ders3';
  name: string = 'mert';
}
