import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { userSignUpData } from '../../shared/models/signup.interface';
import { ApiService } from '../../shared/services/api.service';
import { ToastService } from '../../shared/services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup
  signUpFormData: userSignUpData

  org_id: string = ""

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private toastService: ToastService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      // dashboardType: ['', Validators.required],
      consent: [false, Validators.requiredTrue],
    }, { validator: this.passwordMatchValidator });

    this.signUpFormData = {
      firstName: "",
      middleName: "",
      lastName: "",
      password: "",
      email: "",
      phone: "",
      org_id: ""
    }

    this.org_id = window.sessionStorage.getItem("org_id") || ""
  }

  get f() {
    return this.signupForm.controls;
  }

  passwordMatchValidator(form: AbstractControl) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      form.get('confirmPassword')?.setErrors(null);
    }
    return null;
  }

  onSignup() {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    } else if (!this.org_id) {
      this.toastService.show("Invalid Organisation", "warning")
      return
    }
    // Submit logic here

    const fullName = this.signupForm.get('fullName')?.value?.trim();

    let firstName = ""
    let middleName = ""
    let lastName = ""

    if (fullName) {
      const nameParts = fullName.split(' ').filter((part: any) => part);

      firstName = nameParts[0] || '';
      middleName = nameParts.length === 3 ? nameParts[1] : '';
      lastName = nameParts.length >= 2 ? nameParts[nameParts.length - 1] : '';
    } else {
      firstName = '';
      middleName = '';
      lastName = '';
    }

    this.signUpFormData = {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      email: this.signupForm.get('email')?.value,
      password: this.signupForm.get('password')?.value,
      phone: "",
      org_id: window.sessionStorage.getItem("org_id") || ""
    }

    this.apiService.signupUser(this.signUpFormData).subscribe({
      next: (loginRes) => {
        console.log('✅ Sign Up Successful:', loginRes);

        this.toastService.show("Sign Up Success", "success")
      },
      error: (err) => {
        console.error('❌ Sign Up Failed:', err);

        this.toastService.show("Sign Up Failed", "error")
      }
    });
  }

  navigate(route: string) {
    console.log("Register Route: ", route)

    this.router.navigateByUrl('/' + route)
  }
}
