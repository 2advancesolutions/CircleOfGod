import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-route-login',
  templateUrl: './route-login.component.html',
  styleUrls: ['./route-login.component.scss']
})
export class RouteLoginComponent implements OnInit {

  loading = false;

  constructor(private readonly supabase: SupabaseService) { }

  ngOnInit(): void {
  }

  async handleLogin(input: string) {
    try {
      this.loading = true;
      await this.supabase.signIn(input);
      alert('Check your email for the login link!');
    } catch (error: any) {
      alert(error.error_description || error.message)
    } finally {
      this.loading = false;
    }
  }

}
