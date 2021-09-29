import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { UserProfileService } from 'src/app/services/interceptors/user-profile.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private userProfileService: UserProfileService, private http: HttpClient) { }

  ngOnInit(): void {
    let session: any = localStorage.getItem('session');
    if(session) {
      session = JSON.parse(session)
    }

    // get User Profile
   this.http.get(`https://${environment.supabaseUrl}/rest/v1/profiles?uuid=eq.${session.user.id}`)
   .toPromise().then((data: any) => {
       console.log(data);
   })
  }

}
