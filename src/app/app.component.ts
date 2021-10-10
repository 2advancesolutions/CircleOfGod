import { Component, OnInit } from '@angular/core';
import { SupabaseService } from './services/supabase.service';
import { Spinkit } from 'ng-http-loader';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly supabase: SupabaseService) { }
  public spinkit = Spinkit;
  ngOnInit(): void {
    localStorage.setItem('token',environment.supbaseKey);
    this.supabase.authChanges((_, session) => {
      if(session) {
        localStorage.setItem('session', JSON.stringify(session));
      }
    });
  }
}
