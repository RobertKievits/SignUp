import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastEvents, ToastService } from '@components/toast';
import {
  mustContainLowercaseAndUppercase,
  passwordDoesNotContainFirstNameOrLastName,
  validEmail
} from '@core/validators';
import { SignUpService } from './services';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html'
})
export class SignUpFormComponent implements OnInit {
  public signUpForm: FormGroup;

  constructor(
    private signUpService: SignUpService,
    private toastService: ToastService
  ) {}

  /**
   * Angular lifecycle hook.
   * Create sign-up form on init
   */
  public ngOnInit(): void {
    this.createForm();
  }

  /**
   * On submit set all fields to touched state.
   * If valid submit form
   */
  public onSubmit(): void {
    this.signUpForm.markAllAsTouched();

    if (this.signUpForm.valid) {
      this.signUpService
        .signUp({
          firstName: this.signUpForm.value.firstName,
          lastName: this.signUpForm.value.lastName,
          email: this.signUpForm.value.email
        })
        .subscribe({
          next: () =>
            this.toastService.showToast({
              message: 'Your sign-up data was successfully submitted',
              type: ToastEvents.SUCCESS,
              title: 'Sign-up submitted'
            }),
          error: () =>
            this.toastService.showToast({
              message: 'Sing-up went wrong. Please try agin later',
              type: ToastEvents.ERROR,
              title: 'Something went wrong'
            })
        });
    }
  }

  /**
   * Check if form control has error
   * @param formControlName
   * @returns {boolean}
   */
  public hasError(formControlName: string): boolean {
    const formControl = this.signUpForm.get(formControlName) as FormControl;
    return formControl.invalid && formControl.touched;
  }

  /**
   * Create base sign up form component
   */
  private createForm(): void {
    this.signUpForm = new FormGroup(
      {
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, validEmail()]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          mustContainLowercaseAndUppercase()
        ])
      },
      {
        validators: [passwordDoesNotContainFirstNameOrLastName()]
      }
    );
  }

  /**
   * Password form control getter
   * @returns {FormControl}
   */
  public get passwordControl(): FormControl {
    return this.signUpForm.get('password') as FormControl;
  }
}
