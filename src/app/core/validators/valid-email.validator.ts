import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validEmail(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line no-useless-escape
    return !emailRegex.test(control.value) ? { validEmail: true } : null;
  };
}
