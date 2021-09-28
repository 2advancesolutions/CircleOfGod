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
  private session = this.supabase.session;
  public spinkit = Spinkit;
  ngOnInit(): void {
    let session: any = localStorage.getItem('session');
    let defaultKey = environment.supbaseKey
    if(session) {
      session = JSON.parse(session).access_token;
    }else {
      session = environment.supbaseKey;
    }
    this.supabase.authChanges((_, session) => {
      if(session) {
        localStorage.setItem('session', JSON.stringify(session));
      }
    });
  }
}
