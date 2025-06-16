import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private router: Router
  ) { }

  clearQueryParams(): void {
    this.router.navigate([], {
      queryParams: {},
      replaceUrl: true
    });
  }

  setSessionStorage(key: string, value: any) {
    if(key) {
      window.sessionStorage.setItem(key, value)
    } else {
      console.log("Blank Key")
    }
  }

  getSessionStorage(key: string): any {
    if(key) {
      if(window.sessionStorage.getItem(key)) {
        return window.sessionStorage.getItem(key)
      } else {
        console.log("Invalid Key")
        return null
      }
    } else {
      console.log("Blank Key")
      return ""
    }
  }

  clearSessionStorage(key: string) {
    if(key) {
      window.sessionStorage.removeItem(key)
    } else {
      console.log("Blank Key")
    }
  }
}
