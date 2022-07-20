import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Toast, ToastEvents } from './interfaces';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html'
})
export class ToastComponent {
  @Input() toast: Toast;

  @Output() dispose = new EventEmitter<void>();

  public toastEvents = ToastEvents;
}
