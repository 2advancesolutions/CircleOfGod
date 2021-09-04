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
import  {DockModule } from 'primeng/dock';
import { ChipModule } from 'primeng/chip';
import {TableModule} from 'primeng/table';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {BlockUIModule} from 'primeng/blockui';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import {MenubarModule} from 'primeng/menubar';
import {BadgeModule} from 'primeng/badge';
import {CardModule} from 'primeng/card';
import {OverlayPanelModule} from 'primeng/overlaypanel';

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
    RouteSignUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DockModule,
    TableModule,
    ChipModule,
    AvatarModule,
    AvatarGroupModule,
    DialogModule,
    ButtonModule,
    ConfirmDialogModule,
    DropdownModule,
    BlockUIModule,
    MenubarModule,
    BadgeModule,
    CardModule,
    OverlayPanelModule,
    IonicModule.forRoot()
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
