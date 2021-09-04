import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-route-sign-up',
  templateUrl: './route-sign-up.component.html',
  styleUrls: ['./route-sign-up.component.scss'],
})
export class RouteSignUpComponent implements OnInit {
  
  constructor(private readonly supabase: SupabaseService) { }
  
  public loading: boolean = false;
  public userPhone: any | null;
  public userPassword: any | null;
  public display: boolean = false;
  public selectedCity: any | null;
  public cities: any[] =  [
    {name: 'Choose One...', code: 'null'},
    {name: 'Buddhists', code: 'BU'},
    {name: 'Christians', code: 'CHR'},
    {name: 'Ethnic and indigenous', code: 'EI'},
    {name: 'Hindus', code: 'HD'},
    {name: 'Jainism', code: 'JA'},
    {name: 'Judaism', code: 'JU'},
    {name: 'Muslims', code: 'MU'},
    {name: 'Nondenominational', code: 'ND'},
    {name: 'Sikhism', code: 'SK'},
    {name: 'Spiritism', code: 'SP'},
    {name: 'Sikhism', code: 'SK'},
    {name: 'Taoists/Confucianists/Chinese traditional religionists', code: 'SK'},
    {name: 'Other', code: 'OT'},
];
  ngOnInit() {}
  public async signUp(): Promise<void> {
    try {
      this.loading = true;
      await this.supabase.signUpWithPhone(this.userPhone, this.userPassword);
      this.showDialog();
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      this.loading = false;
    }
  }
  public showDialog() {
    this.display = true;
  }
}
