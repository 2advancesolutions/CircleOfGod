import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-route-sign-up',
  templateUrl: './route-sign-up.component.html',
  styleUrls: ['./route-sign-up.component.scss']
})
export class RouteSignUpComponent implements OnInit {
  constructor(private readonly supabase: SupabaseService, private fb: FormBuilder) { }
  public loading = false;
  public userPhone: any;
  public userPassword: any;

  ngOnInit() {
  
  }

  public async test() {
   
    try {
      this.loading = true;
      await this.supabase.signUpWithPhone(this.userPhone);
      alert('sending verfication code to you phone please enter');
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      this.loading = false;
    }
  }
 public async onSubmit(form: FormGroup) {
  
     
  }

}
