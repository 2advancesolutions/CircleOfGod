import { Injectable, OnInit } from '@angular/core';
import {
  AuthChangeEvent,
  createClient,
  PostgrestSingleResponse,
  Session,
  Subscription,
  SupabaseClient,
  User,
} from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import { Profile } from '../modals/profile';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService implements OnInit {
  private supabase: SupabaseClient;
  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supbaseKey
    );
  }
  ngOnInit(): void {}
  get user(): User | null {
    return this.supabase.auth.user();
  }
  get session(): Session | null {
    return this.supabase.auth.session();
  }
  get profile(): PromiseLike<PostgrestSingleResponse<any>> {
    return this.supabase
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('id', this.user?.id)
      .single();
  }
  public authChanges(
    callback: (event: AuthChangeEvent, session: Session | null) => void
  ): {
    data: Subscription | null;
    error: Error | null;
  } {
    return this.supabase.auth.onAuthStateChange(callback);
  }
  public signIn<T>(email: string): Promise<any> {
    return this.supabase.auth.signIn({ email });
  }
  public signUpWithPhone(
    phone: any,
    password: any = '$Edssukds'
  ): Promise<any> {
    return this.supabase.auth.signUp({
      phone: '+1' + phone,
      password: password,
    });
  }
  
  public verifyPin(phone: any, token: any): Promise<any>  {
    return this.supabase.auth.verifyOTP({
      phone: '+1' + phone,
      token: token,
    });
  }

  public signOut(): Promise<{
    error: Error | null;
  }> {
    return this.supabase.auth.signOut();
  }
  public updateProfile(profile: Profile, uuid: any ='', phone: any= '') {
    const update = {
      ...profile,
      id: uuid,
      phone: phone.value,
    };
    return this.supabase.from('profiles').upsert(update, {
      returning: 'minimal',
    });
  }
  public downLoadImage(path: string): Promise<{
    data: Blob | null;
    error: Error | null;
  }> {
    return this.supabase.storage.from('avatars').download(path);
  }

  public uploadAvatar(
    filePath: string,
    file: File
  ): Promise<{
    data: {
      Key: string;
    } | null;
    error: Error | null;
  }> {
    return this.supabase.storage.from('avatars').upload(filePath, file);
  }
}
