import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { ToastService } from '../../services/toast.service';
import { ToastMessage } from '../../models/toast.interface';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent implements OnInit{
  show = false;
  message = '';
  type: ToastMessage['type'] = 'info';

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.toastState$.subscribe((toast) => {
      this.message = toast.message;
      this.type = toast.type;
      this.show = true;

      setTimeout(() => this.show = false, 3000);
    });
  }

  isMobile(): boolean {
    return window.innerWidth <= 768;
  }

  hideToast() {
    this.show = false;
  }

}
