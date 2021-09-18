import { Component, Input, OnInit } from '@angular/core';
import { Session } from '@supabase/supabase-js';
import { Profile } from 'src/app/modals/profile';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  @Input() session: Session | undefined;
  constructor(private readonly supabase: SupabaseService) {}
  loading = false;
  profile: Profile | undefined;
  ngOnInit() {

  }

}
