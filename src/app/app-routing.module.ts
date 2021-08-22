import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteLoginComponent } from './routes/login/route-login/route-login.component';
import { RouteProfileComponent } from './routes/profile/route-profile/route-profile.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  { path: 'login', component: RouteLoginComponent },
  { path: 'profile', component: RouteProfileComponent },
  {
    path: '**',
    component: RouteLoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [RouteProfileComponent];