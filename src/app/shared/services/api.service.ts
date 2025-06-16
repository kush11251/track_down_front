import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userLoginData } from '../models/login.interface';
import { userForgotPasswordData } from '../models/forgot-password.interface';
import { resetPasswordData } from '../models/reset-password.interface';
import { userSignUpData } from '../models/signup.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl

  private authRoute = '/auth'
  private orgRoute = '/org'

  constructor(private http: HttpClient) {}

  loginUser(data: userLoginData) {
    let loginData = {
      email: data.email,
      password: data.password
    }

    return this.http.post(this.baseUrl + this.authRoute + '/login', loginData)
  }

  signupUser(data: userSignUpData) {
    let signUpData = {
      first_name: data.firstName,
      middle_name: data.middleName,
      last_name: data.lastName,
      email: data.email,
      password: data.password,
      phone: data.phone || "0",
      org_id: data.org_id
    }

    return this.http.post(this.baseUrl + this.authRoute + '/signup', signUpData)
  }

  confirmUser(userId: string) {
    return this.http.get(this.baseUrl + this.authRoute + '/confirm/' + userId)
  }

  forgotPassword(data: userForgotPasswordData) {
    let forgotPasswordData = {
      email: data.email
    }

    return this.http.post(this.baseUrl + this.authRoute + '/forgot-password', forgotPasswordData)
  }

  resetPassword(data: resetPasswordData) {
    let resetData = {
      newPassword: data.password
    }

    return this.http.post(this.baseUrl + this.authRoute + '/reset-password/' + data.resetToken, resetData)
  }

  // Org

  getOrgDetails(id: string) {
    return this.http.get(this.baseUrl + this.orgRoute + '/summary/' + id)
  }
}
