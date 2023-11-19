import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { InicioPacienteComponent } from './pagina/paciente/inicio-paciente/inicio-paciente.component';

import { LoginGuard } from './guards/permiso.service';
import { RolesGuard } from './guards/roles.service';
import { PermisoService } from './guards/permiso.service';

const routes: Routes = [
{ path: "", component: InicioComponent },
{ path: "login", component:LoginComponent, canActivate: [LoginGuard] },
{ path: "registro", component: RegistroComponent, canActivate: [LoginGuard] },
{ path: "inicio-paciente", component: InicioPacienteComponent, canActivate: [RolesGuard], data: { expectedRole: ["paciente"] } },
{ path: "gestion-pqrs", component: GestionPqrsComponent, canActivate: [RolesGuard], data: { expectedRole: ["paciente"] } },
{ path: "crear-pqrs", component: CrearPqrsComponent, canActivate: [RolesGuard], data: { expectedRole: ["paciente"] } },
{ path: "detalle-pqrs/:codigo", component: DetallePqrsComponent, canActivate: [RolesGuard], data: { expectedRole: ["paciente"] } },
{ path: "paciente/gestion-info-personal", component: GestionInfoPersonalComponent, canActivate: [RolesGuard], data: { expectedRole: ["paciente"] } },
{ path: "agendar-cita", component: AgendarCitaComponent, canActivate: [RolesGuard], data: { expectedRole: ["paciente"] } },
{ path: "gestionar-citas", component: GestionarCitasComponent, canActivate: [RolesGuard], data: { expectedRole: ["paciente"] } },
{ path: "restablecer-contrasenia", component: RestablecerContraseniaComponent },
{ path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }