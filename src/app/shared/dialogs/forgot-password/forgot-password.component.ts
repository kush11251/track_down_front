import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ToastService } from '../../services/toast.service';
import { userForgotPasswordResponse } from '../../models/forgot-password.interface';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  forgotForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private toastService: ToastService,
    private dialogRef: MatDialogRef<ForgotPasswordComponent>
  ) {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.forgotForm.valid) {
      const email = this.forgotForm.value.email

      this.apiService.forgotPassword({email: email}).subscribe({
        next: (forgotPasswordResponse) => {
          console.log('✅ Forgot Password Successful:', forgotPasswordResponse);

          this.toastService.show("Link Sent", "success")

          this.dialogRef.close(forgotPasswordResponse)
        },
        error: (err) => {
          let res : userForgotPasswordResponse = err.error

          console.log(err)

          this.toastService.show(res?.message || "", "error")
        }
      })
    } else {
      this.forgotForm.markAllAsTouched();
    }
  }

  onCancel() {
    this.dialogRef.close()
  }
}
