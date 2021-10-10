import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthState, AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private authStateStore: AuthStore, private router: Router) {}

  public saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  public saveUUID(uuid: string) {
    localStorage.setItem('uuid', uuid);
  }

  public saveUserStore(user: AuthState): void {
    this.authStateStore.update(user);
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public logOut() {
    this.router.navigateByUrl('home');
  }
}
