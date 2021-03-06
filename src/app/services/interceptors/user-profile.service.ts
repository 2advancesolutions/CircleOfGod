import { Injectable } from '@angular/core';
import { createClient, PostgrestSingleResponse, SupabaseClient } from '@supabase/supabase-js';
import { take } from 'rxjs/operators';
import { AuthQuery } from 'src/app/store/auth/state/auth.query';
import { environment } from 'src/environments/environment';
import { selectPersistStateInit } from '@datorama/akita';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  private supabase: SupabaseClient;

  constructor(private authQuery: AuthQuery) {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supbaseKey
    );
  }

  public getUserProfile(): PromiseLike<PostgrestSingleResponse<any>> {
    let uuid: any = localStorage.getItem('uuid');
    return this.supabase
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('uuid', uuid)
      .single();
  }
}


