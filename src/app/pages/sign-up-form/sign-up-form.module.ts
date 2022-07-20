import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ToastModule } from '@components/toast';

import { SignUpFormComponent } from './sign-up-form.component';
import { SignUpService } from './services';

@NgModule({
  declarations: [SignUpFormComponent],
  exports: [SignUpFormComponent],
  imports: [CommonModule, ReactiveFormsModule, ToastModule],
  providers: [SignUpService]
})
export class SignUpFormModule {}
