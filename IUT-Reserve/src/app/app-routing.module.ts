import { AdmUserComponent } from './pages/adm-user/adm-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdmperfilComponent } from './pages/admperfil/admperfil.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { HomeComponent } from './pages/home/home.component';
import { UserperfilComponent } from './pages/userperfil/userperfil.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admperfil', component: AdmperfilComponent},
  { path: 'userperfil', component: UserperfilComponent},
  { path: 'admuser', component: AdmUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
