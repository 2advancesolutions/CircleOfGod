import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponentRoute as RouteLandingComponent } from './routes/landing/landing.component';
import { RouteLoginComponent } from './routes/login/route-login/route-login.component';
import { RouteProfileComponent } from './routes/profile/route-profile/route-profile.component';
import { MainLayoutComponent } from './routes/main/main.component';
import { RouteSignUpComponent } from './routes/sign-up/route-sign-up.component';
import { WallComponent } from './components/wall/wall.component';
import { LayoutComponent } from './routes/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RouteLandingComponent
  },
  { path: 'home', component: RouteLandingComponent },
  { path: 'login', component: RouteLoginComponent },
  { path: 'signup', component: RouteSignUpComponent },
  { path: 'main', component: MainLayoutComponent,
    children: [
      { path: '', component: LayoutComponent},
       { path: 'profile', component: RouteProfileComponent }
    ],
   },
  { path: '**', component: RouteLandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [RouteProfileComponent];