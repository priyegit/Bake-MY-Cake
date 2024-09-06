import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
validateCakeGuideCode() {
//throw new Error('Method not implemented.');
}
  adminstratorCode:string="";

  constructor(private authService: AuthService, private routeService: RouteService) { }

  ngOnInit(): void {
  }
  validateadminstratorCode() {
    this.authService.login(this.adminstratorCode);
    if(this.authService.isLoggedIn) {
        this.routeService.navigateToCakeRequests();
    }

  }
}
