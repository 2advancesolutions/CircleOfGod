import { Component, Input, OnInit } from '@angular/core';
import { Session } from '@supabase/supabase-js';
import { Profile } from 'src/app/modals/profile';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  @Input() session: Session | undefined;
  constructor() {}
  loading = false;
  profile: Profile | undefined;
  ngOnInit() {

  }

}
