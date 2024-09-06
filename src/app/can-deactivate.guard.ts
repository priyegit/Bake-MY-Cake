import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  CanDeactivateFn,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { CakeCartComponent } from './cake-cart/cake-cart.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: CakeCartComponent,
    _currentRoute: ActivatedRouteSnapshot,
    _currentState: RouterStateSnapshot,
    _nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
