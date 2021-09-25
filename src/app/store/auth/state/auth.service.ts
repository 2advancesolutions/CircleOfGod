import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthState, AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private authStore: AuthStore, private router: Router) {}

  public saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  public setUserProfile(user: AuthState): void {
    this.authStore.update(user);
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public logOut() {
    this.router.navigateByUrl('home');
  }
}
