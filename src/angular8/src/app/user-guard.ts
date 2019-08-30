import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) { }
  canActivate(): boolean {
    if (this.userService.isValidUser()) {
      return true;
    } else {
      this.router.navigate(['/forbidden']);
      return false;
    }
  }
}
