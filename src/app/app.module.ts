import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { GestionPqrsComponent } from './pagina/paciente/gestion-pqrs/gestion-pqrs.component';
import { CrearPqrsComponent } from './pagina/paciente/crear-pqrs/crear-pqrs.component';
import { DetallePqrsComponent } from './pagina/paciente/detalle-pqrs/detalle-pqrs.component';
import { GestionInfoPersonalComponent } from './pagina/paciente/gestion-info-personal/gestion-info-personal.component';
import { AgendarCitaComponent } from './pagina/paciente/agendar-cita/agendar-cita.component';
import { GestionarCitasComponent } from './pagina/paciente/gestionar-citas/gestionar-citas.component';
import { RestablecerContraseniaComponent } from './pagina/restablecer-contrasenia/restablecer-contrasenia.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    GestionPqrsComponent,
    CrearPqrsComponent,
    DetallePqrsComponent,
    GestionInfoPersonalComponent,
    AgendarCitaComponent,
    GestionarCitasComponent,
    RestablecerContraseniaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
