import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn: boolean = false;

  constructor() {}

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
