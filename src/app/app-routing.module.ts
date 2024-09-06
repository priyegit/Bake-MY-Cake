import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CakeCartComponent } from './cake-cart/cake-cart.component';
import { AuthGuard } from './services/auth.guard';
import { CakeRequestsComponent } from './cake-requests/cake-requests.component';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'cake-cart/:id',
    component: CakeCartComponent,
    canDeactivate: [CanDeactivateGuard],
  },
  {
    path: 'cake-requests',
    component: CakeRequestsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
