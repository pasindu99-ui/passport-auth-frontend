import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private route: Router) {}

  canActivate() {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    Swal.fire('Log In First');
    this.route.navigate(['login']);
    return false;
  }
}
