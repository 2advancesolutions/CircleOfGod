import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISession } from 'src/app/modals/session';
import { DbService } from 'src/app/services/db.service';
import { SupabaseService } from 'src/app/services/supabase.service';
import { AuthService } from 'src/app/store/auth/state/auth.service';
import { environment } from 'src/environments/environment';


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
    private dbService: DbService
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
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.submitted = true;
      return;
    } else {
      const { phone, password } = this.f;
      try {
        this.supabase
          .signUpWithPhone(phone.value, password.value)
          .then((data: any) => {
            if (data.error) {
              alert(data.error.message);
            } else {
              this.sessionObj = data;
              this.showVerficationPinModal('left');
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
  public verifyPin(): void {
    this.loading = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.submitted = true;
      return;
    } else {
      
      const { pin } = this.fInput;
      const { userName, phone } = this.f;
      const token = pin.value;
      const uuid = this.sessionObj.user.id;
      const username = userName.value;
   
      try {
        this.supabase.verifyPin(phone.value, token).then((data: ISession) => {
          if (data.error) {
            alert(data.error.message);
          } else {
            const user = {
              uuid: uuid,
              username: username,
              phone: phone.value,
              joindate: new Date()
            };
            this.dbService.insert(user,'profiles').then(() => {
              this.display = false;
              this.cacheUserProfile(uuid, username, phone);
              this.router.navigateByUrl('/main');
            });
          }
        });
      } finally {
        this.submitted = false;
        this.loading = false;
      }
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

  private cacheUserProfile(
    uuid: any,
    username: any,
    phone: any
  ): void {
    this.authService.setUserProfile({
      id: uuid,
      username: username,
      website: '',
      avatar_url: '',
      phone: phone.value,
      joinDate: null,
    });
  }
}
