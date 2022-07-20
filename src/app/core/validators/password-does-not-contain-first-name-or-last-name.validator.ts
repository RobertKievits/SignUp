import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordDoesNotContainFirstNameOrLastName(): ValidatorFn {
  return (form: AbstractControl): ValidationErrors | null => {
    const firstName = form.get('firstName')?.value;
    const lastName = form.get('lastName')?.value;
    const password = form.get('password')?.value;

    if (firstName && firstName.length > 0) {
      return password.includes(firstName)
        ? { passwordDoesNotContainFirstNameOrLastName: true }
        : null;
    }

    if (lastName && lastName.length > 0) {
      return password.includes(lastName)
        ? { passwordDoesNotContainFirstNameOrLastName: true }
        : null;
    }

    return null;
  };
}
