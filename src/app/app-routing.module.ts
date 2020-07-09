import { AcademyComponent } from './pages/academy/academy.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UpdatePasswordComponent } from './pages/update-password/update-password.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthPinComponent } from './pages/auth-pin/auth-pin.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'authenticate-pin',
    component: AuthPinComponent,
  },
  {
    path: 'update-password',
    component: UpdatePasswordComponent,
  },
  {
    path: 'home-academy',
    component: AcademyComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
