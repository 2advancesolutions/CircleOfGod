import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalConfig } from 'src/app/global/project.config';
import { DbService } from 'src/app/services/db.service';
import { HttpHelperService } from 'src/app/services/http-helper/http-helper.service';
import { SupabaseService } from 'src/app/services/supabase.service';
import { AuthService } from 'src/app/store/auth/state/auth.service';

@Component({
  selector: 'app-route-sign-up',
  templateUrl: './route-sign-up.component.html',
  styleUrls: ['./route-sign-up.component.scss'],
})
export class RouteSignUpComponent implements OnInit {
  constructor(
    private readonly supabase: SupabaseService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private dbService: DbService,
    private http: HttpHelperService
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
  public displayModal: boolean = false;
  public displayBasic: boolean = false;
  public displayBasic2: boolean = false;
  public displayMaximizable: boolean = false;
  public displayPosition: boolean = false;
  public position: string | any;
  public sessionObj: any | null;

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
    this.verfiyForm = this.formBuilder.group(
      {
        pin: ['', [Validators.required, Validators.minLength(6)]],
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
if (this.registerForm.invalid) {
    this.submitted = true;
    this.loading = false;
    return;
} else {
    const { phone, password} = this.f;
    const obj = {
      phone: `+1${phone.value}`,
      password: password.value
    };
    const url = GlobalConfig.superbase.api.auth.signUpPhone.url;
    this.http.post(url, obj).toPromise().then((data : any) => {
        this.sessionObj = data;
        this.showVerficationPinModal('left');
    })
}}

  public showDialog(): void {
    this.display = true;
  }
  public verifyPin(): void {
    this.loading = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.submitted = true;
      return;
    } else {

      const { pin } = this.fInput;
      const { userName, phone } = this.f;

      const obj = {
        type: 'sms',
        phone: `+1${phone.value}`,
        token: pin.value
      };
      const url = GlobalConfig.superbase.api.auth.verfifyPin.url
      this.http.post(url, obj).toPromise().then((data : any) => {
        this.authService.saveToken(data.access_token);
        this.authService.saveUUID(this.sessionObj.id);
        const userObj = {
          uuid: this.sessionObj.id,
          username: userName.value,
          phone: this.sessionObj.phone,
          joindate: this.sessionObj.updated_at
        };
        this.dbService.insert(userObj,'profiles').then(() => {
          this.display = false;
          // Save User Profile Auth Store State
          this.cacheUserProfile(userObj);
          this.router.navigateByUrl('/main');
        });
      })
    }
  }

  public showCompleteModal(): void {
    this.display = false;
    this.showSetupCompletedModal = true;
  }
  public onReset(): void {
    this.registerForm.reset();
  }

  public showModalDialog(): void {
    this.displayModal = true;
  }

  public showBasicDialog(): void {
    this.displayBasic = true;
  }

  public showBasicDialog2(): void {
    this.displayBasic2 = true;
  }

  public showMaximizableDialog(): void {
    this.displayMaximizable = true;
  }

  public showVerficationPinModal(position: string): void {
    this.position = position;
    this.displayPosition = true;
    this.display = true;
  }

  private cacheUserProfile(user: any): void {
    this.authService.saveUserStore({
      id: user.uuid,
      username: user.username,
      website: '',
      avatar_url: '',
      phone: user.phone,
      joinDate: user.joindate,
    });
  }
}
