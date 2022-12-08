import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdmPerfilComponent } from './pages/adm-perfil/adm-perfil.component';
import { AdmReservasComponent } from './pages/adm-reservas/adm-reservas.component';
import { AdmSalasComponent } from './pages/adm-salas/adm-salas.component';
import { AdmUserComponent } from './pages/adm-user/adm-user.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { UserPerfilComponent } from './pages/user-perfil/user-perfil.component';
import { UserReservasComponent } from './pages/user-reservas/user-reservas.component';

const routes: Routes = [
  { path: 'adm-perfil', component: AdmPerfilComponent },
  { path: 'adm-reservas', component: AdmReservasComponent },
  { path: 'adm-salas', component: AdmSalasComponent },
  { path: 'adm-user', component: AdmUserComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'user-perfil', component: UserPerfilComponent },
  { path: 'user-reservas', component: UserReservasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
