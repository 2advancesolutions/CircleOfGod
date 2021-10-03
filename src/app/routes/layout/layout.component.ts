import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { UserProfileService } from 'src/app/services/interceptors/user-profile.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(
    private http: HttpClient
  ) {}

  public welecomeAnimation: Boolean = true;

  ngOnInit(): void {
    this.loadWelcomeAnimation();
    this.fetchUserProfile();
  }

  private loadWelcomeAnimation() {
    setTimeout(() => {
      this.welecomeAnimation = false;
    }, 6000);
  }

  private fetchUserProfile() {
    let session: any = localStorage.getItem('session');
    // no session redirect logic user not auth
    session ? (session = JSON.parse(session)) : localStorage.clear();
    this.http
      .get(
        `${environment.supabaseUrl}/rest/v1/profiles?uuid=eq.${session.user.id}`
      )
      .toPromise()
      .then((data: any) => {
        console.log(data);
      });
  }
}
