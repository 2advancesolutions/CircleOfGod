import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Profile } from 'src/app/modals/profile';

export interface AuthState extends Profile {
  id?: string,
  username?: any;
  website?: string;
  avatar_url?: string;
  phone?: string;
  joinDate?: Date | null;
}

export function createInitialState(): AuthState {
  return {
    id: '',
    username: '',
    website: '',
    avatar_url: '',
    phone: '',
    joinDate: null
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth' })
export class AuthStore extends Store<AuthState> {

  constructor() {
    super(createInitialState());
  }

}
