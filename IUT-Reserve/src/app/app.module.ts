import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NgMaterialModule } from './ng-material/ng-material.module';
<<<<<<< Updated upstream

@NgModule({
  declarations: [AppComponent, LoginComponent],
=======
import { RegistrationComponent } from './pages/registration/registration.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
  ],
>>>>>>> Stashed changes
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
