import { Component, OnInit } from '@angular/core';
import { SupabaseService } from './services/supabase.service';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly supabase: SupabaseService) { }
  session = this.supabase.session;
  ngOnInit(): void {
    this.supabase.authChanges((_, session) => {
      this.session = session;
      console.log('User Session');
      console.log(this.session);
    });
  }
}
