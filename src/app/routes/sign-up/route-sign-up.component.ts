import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-route-sign-up',
  templateUrl: './route-sign-up.component.html',
  styleUrls: ['./route-sign-up.component.scss']
})
export class RouteSignUpComponent implements OnInit {
  public loading = false;
  public phoneNumber: any = null;
  public password: any = null;
  constructor(private readonly supabase: SupabaseService) { }
  ngOnInit(): void {
   
  }

  async signUp() {

    try {
      this.loading = true;
      await this.supabase.signUpWithPhone(this.phoneNumber, this.password);
      alert('Check your email for the login link!');
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      this.loading = false;
    }
  }

}
