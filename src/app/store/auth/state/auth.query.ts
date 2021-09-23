import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { AuthStore, AuthState } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthState> {

  constructor(protected store: AuthStore) {
    super(store);
  }

  public selectUserProfile(): Observable<AuthState> {
   return this.select((state:AuthState) => state);
  }

}
