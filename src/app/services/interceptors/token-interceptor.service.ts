import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/store/auth/state/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let session: any = localStorage.getItem('session');
    let defaultKey = environment.supbaseKey
    if(session) {
      session = JSON.parse(session).access_token;
    }else {
      session = environment.supbaseKey;
    }
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'apikey': environment.supbaseKey,
        'Authorization': `Bearer ${session}`,
      },
    });
    return next.handle(request);
  }
}