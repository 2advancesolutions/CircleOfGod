import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalConfig } from 'src/app/global/project.config';
import { HttpHelperService } from 'src/app/services/http-helper/http-helper.service';



@Component({
  selector: 'app-route-login',
  templateUrl: './route-login.component.html',
  styleUrls: ['./route-login.component.scss']
})
export class RouteLoginComponent implements OnInit {

  public loading = false;
  public registerForm!: FormGroup;
  public submitted = false;
  private emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  constructor( 
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpHelperService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        userName: [
          '',
          [Validators.required, Validators.pattern(this.emailPattern)],
        ],
        password: ['', [Validators.required, Validators.minLength(6)]]
      },
      {}
    );
  }

  get f() {
    return this.registerForm.controls;
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
      const url = GlobalConfig.superbase.api.auth.signInEmail.url;
      this.http
        .post(url, obj)
        .toPromise()
        .then(
          (data: any) => {
            localStorage.setItem('session', JSON.stringify(data));
         this.router.navigateByUrl('/main');
          },
          (error) => {
            console.log(error);
             alert('Invaild User Name and Password');
          }
        );
    }
  }

}
