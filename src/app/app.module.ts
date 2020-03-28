import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegistrationComponent } from './core/auth/registration/registration.component';
import { ValidationErrorComponent } from './core/auth/validation-error/validation-error.component';
import { NavBarComponent } from './core/ui/nav-bar/nav-bar.component';
import { PasswordRestoreComponent } from './core/auth/password-restore/password-restore.component';
import { FooterComponent } from './core/ui/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ValidationErrorComponent,
    NavBarComponent,
    PasswordRestoreComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
