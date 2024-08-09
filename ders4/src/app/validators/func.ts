import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function capitalLetterValidator(count: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    const ascii: string[] = [];
    for (let n = 65; n <= 90; n++) {
      ascii.push(String.fromCharCode(n));

      let state: boolean = true;
      for (let c = 0; c < count; c++) {
        if (ascii.indexOf(value[c]) == -1) {
          state = false;
          break;
        }
      }
      if (!state) {
        return { capitalLetter: true };
      }
    }

    return null;
  };
}

export function matchPassword(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const passwordConfirm = control.get('passwordConfirm')?.value;

    if (password != passwordConfirm) {
      return { passwordMismatch: true };
      
    }

    return null;
  };
}
