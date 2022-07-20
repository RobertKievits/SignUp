import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Toast } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  public toastEvents: Observable<Toast>;
  private _toastEvents = new Subject<Toast>();

  constructor() {
    this.toastEvents = this._toastEvents.asObservable();
  }

  public showToast(toast: Toast) {
    this._toastEvents.next(toast);
  }
}
