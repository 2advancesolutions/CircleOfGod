import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from 'src/app/modals/session';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-route-sign-up',
  templateUrl: './route-sign-up.component.html',
  styleUrls: ['./route-sign-up.component.scss'],
})
export class RouteSignUpComponent implements OnInit {
  constructor(
    private readonly supabase: SupabaseService,
    private formBuilder: FormBuilder
  ) {}

  public registerForm!: FormGroup;
  public submitted = false;
  public loading: boolean = false;
  public userPhone: any | null;
  public userPassword: any | null;
  public display: boolean = false;
  public selectedCity: any | null;
  public showSetupCompletedModal: boolean = false;
  public cities: any[] = [
    { name: 'Choose One...', code: 'null' },
    { name: 'Buddhists', code: 'BU' },
    { name: 'Christian', code: 'CHR' },
    { name: 'Ethnic and indigenous', code: 'EI' },
    { name: 'Hindu', code: 'HD' },
    { name: 'Jainism', code: 'JA' },
    { name: 'Judaism', code: 'JU' },
    { name: 'Muslim', code: 'MU' },
    { name: 'Nondenomination', code: 'ND' },
    { name: 'Sikhism', code: 'SK' },
    { name: 'Spiritism', code: 'SP' },
    { name: 'Sikhism', code: 'SK' },
    {
      name: 'Taoists/Confucianists/Chinese traditional religionists',
      code: 'SK',
    },
    { name: 'Other', code: 'OT' },
  ];
  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        userName: ['', [Validators.required, Validators.minLength(1)]],
        phone: ['', [Validators.required, Validators.minLength(6)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        acceptTerms: [false, Validators.requiredTrue],
      },
      {}
    );
  }
  get f() {
    return this.registerForm.controls;
  }
  public onSubmit(): void {
    this.loading = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.submitted = true;
      return;
    } else {
      const { phone, password } = this.f;
      try {
        this.supabase
          .signUpWithPhone(phone.value, password.value)
          .then((data: ISession) => {
            if (data.error) {
              alert(data.error.message);
            } else {
              // show next step
              this.showDialog();
            }
          });
      } finally {
        this.submitted = false;
        this.loading = false;
      }
    }
  }
  public showDialog(): void {
    this.display = true;
  }
  public async verifyPin(phone: any, token: any) {
    try {
      this.loading = true;
      await this.supabase.verifyPin(phone, token);
      this.showDialog();
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      this.loading = false;
    }
  }
  public showCompleteModal() {
    this.display = false;
    this.showSetupCompletedModal = true;
  }
  public onReset() {
    this.registerForm.reset();
  }
}
