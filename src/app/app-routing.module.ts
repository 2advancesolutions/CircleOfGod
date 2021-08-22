import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponentRoute as RouteLandingComponent } from './routes/landing/landing.component';
import { RouteLoginComponent } from './routes/login/route-login/route-login.component';
import { RouteProfileComponent } from './routes/profile/route-profile/route-profile.component';

const routes: Routes = [
  { path: 'login', component: RouteLoginComponent },
  { path: 'landing', component: RouteLandingComponent },
  { path: 'profile', component: RouteProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [RouteProfileComponent];