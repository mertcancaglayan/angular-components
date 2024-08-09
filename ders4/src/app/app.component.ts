import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { log } from 'console';
import { ModelDrivenComponent } from './components/model-driven/model-driven.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, ModelDrivenComponent],

  template: `
    <form #frm="ngForm" (ngSubmit)="onSubmit(frm.value)">
      <input type="text" name="name" placeholder="Name" ngModel /> <br />
      <input type="text" name="surname" placeholder="Surname" ngModel /> <br />
      <input type="email" name="email" placeholder="Email" ngModel /> <br />
      <input type="tel" name="tel" placeholder="Tel" /> <br />
      <div ngModelGroup="adress">
        <h2 style="margin: 0; padding: 0;">Adress</h2>
        <input type="text" ngModel placeholder="Country" name="country" />
        <input type="text" ngModel placeholder="City" name="city" />
        <input type="text" ngModel placeholder="Street" name="street" />
      </div>
      <button>Send</button>
    </form>
    <h1>Model Driven</h1>
    <app-model-driven />
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('frm', { static: true })
  frm!: NgForm;

  onSubmit(data: object) {
    // console.log(`Value: ${this.frm.value}`);
    // console.log(`Valid: ${this.frm.valid}`);
    // console.log(`Touched: ${this.frm.touched}`);
    // console.log(`Submit: ${this.frm.submitted}`);
    // console.log(data);
    // this.frm.resetForm()

    console.log(this.frm);
    console.log(this.frm.form);
    console.log(this.frm.controls['surname']);
  }
}
