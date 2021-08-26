import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-route-sign-up',
  templateUrl: './route-sign-up.component.html',
  styleUrls: ['./route-sign-up.component.scss']
})
export class RouteSignUpComponent implements OnInit {
  constructor(private readonly supabase: SupabaseService, private fb: FormBuilder, private router: Router) { }
  public loading: boolean = false;
  public userPhone: any | null;
  public userPassword: any | null;;
  ngOnInit() {}
  public async signUp(): Promise<void> {
    try {
      this.loading = true;
      await this.supabase.signUpWithPhone(this.userPhone, this.userPassword);
      alert('sending verfication code to you phone please enter');
      this.router.navigateByUrl('/profile');
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      this.loading = false;
    }
  }
}
