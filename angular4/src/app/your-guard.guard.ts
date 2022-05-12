import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class YourGuardGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    console.log(next, state);
    return !!next.queryParams.admin;
  }
}
