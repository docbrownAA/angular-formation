import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private static KEY = 'auth';

  constructor() {
  }

  public login() {
    localStorage.setItem(AuthenticationService.KEY, '0987654321J');
    return true;
  }

  public state() {
    return localStorage.getItem(AuthenticationService.KEY) != null;
  }

  public logout() {
    localStorage.removeItem(AuthenticationService.KEY);
    return false;
  }
}
