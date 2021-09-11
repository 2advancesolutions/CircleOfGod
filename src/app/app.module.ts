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
import { RouteAdsComponent } from './routes/route-ads/route-ads.component';
import { AdsAdminComponent } from './components/ads-admin/ads-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { AccountComponent } from './components/account/account.component';
import { VendorsModule } from './modules/vendors/vendors.module';

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
    RouteAdsComponent,
    AdsAdminComponent,
    DashboardCardComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    VendorsModule,
    IonicModule.forRoot()
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
