import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthState, AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private authStore: AuthStore) {
  }

  public setUserProfile(user: AuthState): void {
    this.authStore.update(user);
  }


}
