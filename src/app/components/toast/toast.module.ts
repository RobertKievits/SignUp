import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ToastComponent } from './toast.component';
import { ToasterComponent } from './toaster.component';

@NgModule({
  declarations: [ToastComponent, ToasterComponent],
  exports: [ToastComponent, ToasterComponent],
  imports: [CommonModule]
})
export class ToastModule {}
