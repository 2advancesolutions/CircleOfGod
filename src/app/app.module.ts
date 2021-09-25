import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { PostCommentsComponent } from './components/post-comments/post-comments.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouteLoginComponent } from './routes/login/route-login/route-login.component';
import { RouteProfileComponent } from './routes/profile/route-profile/route-profile.component';
import { WallComponent } from './components/wall/wall.component';
import { LandingComponentRoute } from './routes/landing/landing.component';
import { RouteSignUpComponent } from './routes/sign-up/route-sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ConfirmationService} from 'primeng/api';
import { MenuToolbarComponent } from './components/menu-toolbar/menu-toolbar.component';
import { MainLayoutComponent } from './routes/main/main.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { AccountComponent } from './components/account/account.component';
import { VendorsModule } from './modules/vendors/vendors.module';
import { LayoutComponent } from './routes/layout/layout.component';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { TokenInterceptor } from './services/auth/token-interceptor.service';
import { JwtInterceptor } from './services/auth/jwt-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    TabsComponent,
    EventCardComponent,
    PostCommentsComponent,
    VideoListComponent,
    UserListComponent,
    NavBarComponent,
    SideBarComponent,
    RouteLoginComponent,
    RouteProfileComponent,
    WallComponent,
    LandingComponentRoute,
    RouteSignUpComponent,
    MenuToolbarComponent,
    MainLayoutComponent,
    DashboardCardComponent,
    AccountComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    VendorsModule,
    IonicModule.forRoot(),
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  providers: [ConfirmationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
