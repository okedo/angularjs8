import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private cookies: CookieService) { }
  public isValidUser(): boolean {
    const token = this.cookies.get("token");
    return !!token;
  }
}
