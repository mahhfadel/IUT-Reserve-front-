import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { SharedModule } from './shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';

import { AdmPerfilComponent } from './pages/adm-perfil/adm-perfil.component';
import { AdmReservasComponent } from './pages/adm-reservas/adm-reservas.component';
import { AdmSalasComponent } from './pages/adm-salas/adm-salas.component';
import { AdmUserComponent } from './pages/adm-user/adm-user.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { UpadraoreservasComponent } from './pages/upadraoreservas/upadraoreservas.component';
import { UserperfilComponent } from './pages/userperfil/userperfil.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmPerfilComponent,
    AdmReservasComponent,
    AdmSalasComponent,
    AdmUserComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UpadraoreservasComponent,
    UserperfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgMaterialModule,
    SharedModule,
    NgxMaskModule.forRoot(),
    MatSidenavModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
