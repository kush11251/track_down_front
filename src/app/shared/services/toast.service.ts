import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ToastMessage } from '../models/toast.interface';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject = new Subject<ToastMessage>();
  toastState$ = this.toastSubject.asObservable();

  constructor() { }


  show(message: string, type: ToastMessage['type'] = 'info') {
    this.toastSubject.next({ message, type });
  }
}
