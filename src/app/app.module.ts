import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { UserProfileComponent } from './componets/user-profile/user-profile.component';
import { TabsComponent } from './componets/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    TabsComponent
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
