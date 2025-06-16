import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';
import { ToastService } from '../../shared/services/toast.service';
import { UtilsService } from '../../shared/services/utils.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent implements OnInit{
  resetForm!: FormGroup;
  resetToken: string = ""

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private toastService: ToastService,
    private utlsService: UtilsService
  ) {
    this.resetToken = this.route.snapshot.queryParamMap.get('tkn') || ""

    this.utlsService.clearQueryParams()
  }

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    }, { validators: this.passwordMatchValidator });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.resetForm.controls;
  }

  passwordMatchValidator(group: FormGroup) {
    const pass = group.get('password')?.value;
    const confirmPass = group.get('confirmPassword')?.value;
    return pass === confirmPass ? null : group.get('confirmPassword')?.setErrors({ mismatch: true });
  }

  onSubmit(): void {
    if (this.resetForm.invalid) {
      this.resetForm.markAllAsTouched();
      return;
    }
    let restData = {
      resetToken: this.resetToken,
      password: this.resetForm.get('password')?.value
    }
    console.log('New password to send:', restData);

    this.apiService.resetPassword(restData).subscribe({
      next: (resetRes) => {
        console.log('✅ Reset Successful:', resetRes);

        this.toastService.show("Reset Success", "success")

        this.navigateToLogin();
      },
      error: (err) => {
        console.error('❌ Reset Failed:', err);

        this.toastService.show("Reset Failed", "error")
      }
    });

    // Call API here
  }

  navigateToLogin() {
    setTimeout(() => {
      this.router.navigate(['/auth/login']);
    }, 2000);
  }
}
