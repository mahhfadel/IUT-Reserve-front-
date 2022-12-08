import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { HomeComponent } from './pages/home/home.component';
<<<<<<< HEAD
import { UpadraoreservasComponent } from './pages/upadraoreservas/upadraoreservas.component';
import { AdmsalasComponent } from './pages/admsalas/admsalas.component';
=======
import { ReservasAdmComponent } from './pages/reservas-adm/reservas-adm.component';
>>>>>>> 167dc22855634c0a500d0c51fa90c1ade2b52fdc

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'home', component: HomeComponent },
<<<<<<< HEAD
  { path: 'upadraoreservas', component: UpadraoreservasComponent },
  {path: 'admsalas', component: AdmsalasComponent}
=======
  { path: 'reservas-adm', component: ReservasAdmComponent },
>>>>>>> 167dc22855634c0a500d0c51fa90c1ade2b52fdc
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
