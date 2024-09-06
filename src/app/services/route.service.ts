import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate([""]);
  }
  navigateToCakeRequests() {
    this.router.navigate(["cake-requests"]);
  }
  navigateToLogin() {
    this.router.navigate(["login"]);
}
}
