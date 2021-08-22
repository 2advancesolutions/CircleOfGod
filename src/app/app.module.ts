import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    RouteProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
