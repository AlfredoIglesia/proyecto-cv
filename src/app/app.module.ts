import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Ver https://www.npmjs.com/package/angular-font-awesome para instalación
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Rutas
import { APP_ROUTES } from './app.routes';

// Mis modulos
import { PagesModule } from './pages/pages.module';

// Componentes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AngularFontAwesomeModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
