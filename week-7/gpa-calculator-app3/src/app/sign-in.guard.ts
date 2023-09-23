/**
 * Title: sign-in.guard.ts
 * Author: William Austin
 * Date: 23 September 2023
 * Description: Sign In Route Guard
 */
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class signInGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const sessionUser = this.cookieService.get('session_user');

    if (sessionUser){
      return true;
    } else {
      this.router.navigate(['/session/sign-in']);
      return false;
    }
  }
};
