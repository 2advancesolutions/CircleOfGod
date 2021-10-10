import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalConfig } from 'src/app/global/project.config';
import { DbService } from 'src/app/services/db.service';
import { HttpHelperService } from 'src/app/services/http-helper/http-helper.service';
import { AuthService } from 'src/app/store/auth/state/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-route-sign-up',
  templateUrl: './route-sign-up.component.html',
  styleUrls: ['./route-sign-up.component.scss'],
})
export class RouteSignUpComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private dbService: DbService,
    private http: HttpHelperService
  ) {}

  public registerForm!: FormGroup;
  public verfiyForm!: FormGroup;
  public submitted = false;
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
  public accountExist: boolean = false;
  public errMessage: string = '';
  private emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  ngOnInit() {
    this.redirectPage();
    this.createSignUpForm();
    this.createVerficationForm();
  }
  private createVerficationForm() {
    this.verfiyForm = this.formBuilder.group(
      {
        pin: ['', [Validators.required, Validators.minLength(6)]],
      },
      {}
    );
  }
  private createSignUpForm() {
    this.registerForm = this.formBuilder.group(
      {
        userName: [
          '',
          [Validators.required, Validators.pattern(this.emailPattern)],
        ],
        password: ['', [Validators.required, Validators.minLength(6)]],
        acceptTerms: [false, Validators.requiredTrue],
      },
      {}
    );
  }
  private redirectPage() {
    setTimeout(() => {
      let session: any | null = localStorage.getItem('session');
      if (session) {
        session = JSON.parse(session);
        const userObj = {
          uuid: session.user.id,
          username: session.user.email,
          joindate: session.user.confirmed_at,
        };
        this.dbService.insert(userObj, 'profiles').then(() => {
          // Save User Profile Auth Store State
          this.cacheUserProfile(userObj);
          this.router.navigateByUrl('/main');
        });
      } else {
        this.resetLocalData();
      }
    }, 1000);
  }
  private resetLocalData() {
    environment.supbaseKey = environment.defaultKey;
    this.authService.saveToken(environment.defaultKey);
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
  get f() {
    return this.registerForm.controls;
  }
  get fInput() {
    return this.verfiyForm.controls;
  }
  public onSubmit(): void {
    if (this.registerForm.invalid) {
      this.submitted = true;
      return;
    } else {
      const { userName, password } = this.f;
      const obj = {
        email: userName.value,
        password: password.value,
      };
      const url = GlobalConfig.superbase.api.auth.signUpEmail.url;
      this.http
        .post(url, obj)
        .toPromise()
        .then(
          (data: any) => {
            this.sessionObj = data;

            this.showVerficationPinModal();
          },
          (error) => {
            this.http
              .getById(
                GlobalConfig.superbase.api.profiles.getUserByUUID,
                userName.value
              )
              .toPromise()
              .then((data: any) => {
                console.log(data);
                this.errMessage = error;
                this.accountExist = true;
              });
          }
        );
    }
  }
  public showDialog(): void {
    this.display = true;
  }
  public verifyPin(): void {
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
        token: pin.value,
      };
      const url = GlobalConfig.superbase.api.auth.verfifyPin.url;
      this.http
        .post(url, obj)
        .toPromise()
        .then((data: any) => {
          this.authService.saveToken(data.access_token);
          this.authService.saveUUID(this.sessionObj.id);
          const userObj = {
            uuid: this.sessionObj.id,
            username: userName.value,
            joindate: this.sessionObj.updated_at,
          };
          this.dbService.insert(userObj, 'profiles').then(() => {
            this.display = false;
            // Save User Profile Auth Store State
            this.cacheUserProfile(userObj);
            this.router.navigateByUrl('/main');
          });
        });
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
  public showVerficationPinModal(): void {
    this.displayPosition = true;
    this.display = true;
  }
}
