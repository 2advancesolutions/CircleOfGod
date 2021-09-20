import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  public registerForm!: FormGroup;
  public verfiyForm!: FormGroup;
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
  public sessionObj: any | null;
  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        userName: ['', [Validators.required, Validators.minLength(1)]],
        phone: ['', [Validators.required, Validators.minLength(6)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        acceptTerms: [false, Validators.requiredTrue],
        churchId: [''],
      },
      {}
    );
    this.verfiyForm = this.formBuilder.group(
      {
        pin: ['', [Validators.required, Validators.minLength(6)]]
       
      },
      {}
    );
  }
  get f() {
    return this.registerForm.controls;
  }
  get fInput() {
    return this.verfiyForm.controls;
  }
  public onSubmit(): void {
    this.loading = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.submitted = true;
      return;
    } else {
      const { phone, password} = this.f;
      try {
        this.supabase
          .signUpWithPhone(phone.value, password.value)
          .then((data: any) => {
            if (data.error) {
              alert(data.error.message);
            } else {
              this.sessionObj = data;
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
  public verifyPin() {
    this.loading = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.submitted = true;
      return;
    } else {
      const { phone  } = this.f;
      const { pin } = this.fInput;
      const token = pin.value; 
   
      try {
        // user gets login detials session object
        const uuid = this.sessionObj.user.id;
        const { userName, phone } = this.f;
        const username = userName.value;
  
        this.supabase
          .verifyPin(phone.value, token)
          .then((data: ISession) => {
            if (data.error) {
              alert(data.error.message);
            } else {
              // Once verifyPin create user profile object
              // Todo 
           
            
            this.supabase.updateProfile({username}, uuid, phone).then((data) => {
              console.log(data)
              this.display = false;
              this.router.navigateByUrl('/main');
            })
            }
          });
      } finally {
        this.submitted = false;
        this.loading = false;
      }
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
