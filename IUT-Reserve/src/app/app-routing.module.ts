import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { HomeComponent } from './pages/home/home.component';
import { ReservasAdmComponent } from './pages/reservas-adm/reservas-adm.component';
import { AdmUserComponent } from './pages/adm-user/adm-user.component';
import { AdmperfilComponent } from './pages/admperfil/admperfil.component';
import { UserperfilComponent } from './pages/userperfil/userperfil.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'reservas-adm', component: ReservasAdmComponent },
  { path: 'adm-user', component: AdmUserComponent },
  { path: 'admperfil', component: AdmperfilComponent },
  { path: 'userperfil', component: UserperfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
