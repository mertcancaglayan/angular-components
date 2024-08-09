import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { capitalLetterValidator, matchPassword } from '../../validators/func';

@Component({
  selector: 'app-model-driven',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <form [formGroup]="frm" (ngSubmit)="onSubmit()">
      <input type="text" placeholder="Name" formControlName="name" />
      <div *ngIf="!name?.valid && (name?.dirty || name?.touched)">
        {{ name?.errors | json }}
      </div>
      <br />

      <input type="text" placeholder="Surname" formControlName="surname" />
      <div *ngIf="!surname?.valid && (surname?.dirty || surname?.touched)">
        {{ surname?.errors | json }}
      </div>
      <br />
      <input type="text" placeholder="Email" formControlName="email" />
      <div *ngIf="!email?.valid && (email?.dirty || email?.touched)">
        {{ email?.errors | json }}
      </div>
      <br />

      <input type="text" placeholder="Tel" formControlName="tel" /> <br />
      <br /><br />

      <div formGroupName="passwordArea">
        <input type="text" placeholder="Password" formControlName="password" />
        <br />

        <input
          type="text"
          placeholder="Confirm Password"
          formControlName="passwordConfirm"
        />
        <br />

        <div
          *ngIf="passwordArea?.errors?.['passwordMismatch'] && passwordArea?.touched"
        >
          Passwords do not match.
        </div>
      </div>

      <div formGroupName="address">
        <h2 style="margin: 0; padding: 0;">Adress</h2>
        <input type="text" placeholder="Country" formControlName="country" />
        <input type="text" placeholder="City" formControlName="city" />
        <input type="text" placeholder="Street" formControlName="street" />
      </div>
      <button>Send</button>
    </form>
    <button (click)="clicked()">OK!</button>
    Valid: {{ frm.valid }}

    <h1>States Changes</h1>
    <button (click)="markAsTouched()">markAsTouched</button> <br />
    <button (click)="markAllAsTouched()">markAllAsTouched</button> <br />
    <button (click)="markAsUntouched()">markAsUntouched</button> <br />
    <button (click)="markAsDirty()">markAsDirty</button> <br />
    <button (click)="markAsPristine()">markAsPristine</button> <br />
    <button (click)="disable()">disable</button> <br />
    <button (click)="enable()">enable</button> <br />

    form touched : {{ frm.touched }} <br />
    'name' form control touched: {{ frm.get('name')?.touched }} 'country' form
    <br />
    'address' form control touched: {{ frm.get('address')?.touched }} <br />
    'country' form control touched:
    {{ frm.get('address')?.get('country')?.touched }}
    <hr />

    form dirty : {{ frm.dirty }} <br />
    'name' form control dirty: {{ frm.get('name')?.dirty }}

    <hr />
    form pristine : {{ frm.pristine }} <br />
    'name' form control pristine: {{ frm.get('name')?.pristine }}
  `,
  styleUrl: './model-driven.component.css',
})
export class ModelDrivenComponent {
  frm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, capitalLetterValidator(3)]],
      email: ['', [Validators.required, Validators.email]],
      tel: [''],
      passwordArea: this.formBuilder.group(
        {
          password: ['', Validators.required],
          passwordConfirm: ['', Validators.required],
        },
        { validators: [matchPassword()] }
      ),

      address: formBuilder.group({
        country: [''],
        city: [''],
        street: [''],
      }),
    });

    this.frm.valueChanges.subscribe({
      next: (data) => {
        console.log(data);
      },
    });

    this.frm.get('name')?.statusChanges.subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }

  clicked() {
    this.frm.get('name')?.setValue('mertcan', { onlySelf: true });
  }

  onSubmit() {
    console.log('Model Driven:', this.frm.value);
    console.log('Password Area Errors:', this.passwordArea?.errors);
  }

  markAsTouched() {
    // this.frm.markAsTouched(); both true
    // this.frm.get('name')?.markAsTouched();
    this.frm.get('name')?.markAsTouched({ onlySelf: true });
    this.passwordArea?.markAsTouched();
  }

  markAllAsTouched() {
    // this.frm.markAllAsTouched();
    this.frm.get('address')?.markAllAsTouched(); //address altındaki hepsini etkiliyor
  }

  markAsUntouched() {
    this.frm.markAsUntouched();
  }

  markAsDirty() {
    this.frm.markAsDirty();
  }

  markAsPristine() {
    this.frm.markAsPristine();
  }

  disable() {
    this.frm.get('name')?.disable();
  }

  enable() {
    this.frm.get('name')?.enable();
  }

  get name() {
    return this.frm.get('name');
  }
  get surname() {
    return this.frm.get('surname');
  }
  get email() {
    return this.frm.get('email');
  }
  get passwordArea() {
    return this.frm.get('passwordArea');
  }

  get password() {
    return this.passwordArea?.get('password');
  }

  get passwordConfirm() {
    return this.passwordArea?.get('passwordConfirm');
  }
}
