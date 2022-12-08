import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { RegistrationComponent } from './pages/registration/registration.component';
import { SharedModule } from './shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import { AdmperfilComponent } from './pages/admperfil/admperfil.component';
import { UserperfilComponent } from './pages/userperfil/userperfil.component';
import { AdmUserComponent } from './pages/adm-user/adm-user.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegistrationComponent, AdmperfilComponent, UserperfilComponent, AdmUserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgMaterialModule,
    SharedModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
