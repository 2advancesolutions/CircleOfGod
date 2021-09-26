import { Component, OnInit } from '@angular/core';
import { SupabaseService } from './services/supabase.service';
import { Spinkit } from 'ng-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly supabase: SupabaseService) { }
  private session = this.supabase.session;
  public spinkit = Spinkit;
  ngOnInit(): void {
    this.supabase.authChanges((_, session) => {
      if(session) {
        localStorage.setItem('session', JSON.stringify(session));
      }
    });
  }
}
