import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';
import { userLoginData } from '../../shared/models/login.interface';
import { ToastService } from '../../shared/services/toast.service';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordComponent } from '../../shared/dialogs/forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  loginFormData: userLoginData;

  constructor(
    private fb: FormBuilder, 
    private apiService: ApiService,
    private toastService: ToastService,
    private dialog: MatDialog
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // dashboardType: ['', Validators.required],
      remember: [false],
    });

    this.loginFormData = {
      email: "",
      password: ""
    }
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loginFormData = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    };

    this.apiService.loginUser(this.loginFormData).subscribe({
      next: (loginRes) => {
        console.log('✅ Login Successful:', loginRes);

        this.toastService.show("Login Success", "success")
      },
      error: (err) => {
        console.error('❌ Login Failed:', err);

        this.toastService.show("Login Failed", "error")
      }
    });
  }

  forgotPassword() {
    const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      width: '90%',
      maxWidth: '400px',
      disableClose: false, // allows ESC key
      autoFocus: false
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Forgot password email result:', result);
        // Call API here
      }
    });
  }
}
