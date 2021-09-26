import { Component, OnInit } from '@angular/core';
import { SupabaseService } from './services/supabase.service';

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
      if(session) {
        localStorage.setItem('session', JSON.stringify(session));
      }
    });
  }
}
