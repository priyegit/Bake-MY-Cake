import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  login(cakeOrderCode: string) {
    this.isLoggedIn = cakeOrderCode === '2342';
  }

  logout() {
    this.isLoggedIn = false;
  }
  constructor() { }
}
