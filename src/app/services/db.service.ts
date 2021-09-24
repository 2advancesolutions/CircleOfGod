import { Injectable } from '@angular/core';
import { PostgrestFilterBuilder } from '@supabase/postgrest-js';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private supabase: SupabaseClient;
  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supbaseKey
    );
  }

  public insert<T>(obj: T, table: string):PostgrestFilterBuilder<T> {
    return this.supabase.from(table).upsert(obj, {
      returning: 'minimal',
    });
  }
 
}
