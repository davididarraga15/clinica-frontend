import { Component } from '@angular/core';
import { CrearPqrsDTO } from 'src/app/modelo/paciente/crear-pqrs-dto';
import { PqrsService } from 'src/app/servicios/pqrs.service';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Alerta } from 'src/app/modelo/alerta';
import { InfoCitaDTO } from 'src/app/modelo/paciente/info-cita-dto';

@Component({
  selector: 'app-crear-pqrs',
  templateUrl: './crear-pqrs.component.html',
  styleUrls: ['./crear-pqrs.component.css']
})
export class CrearPqrsComponent {

  crearPqrsDTO: CrearPqrsDTO;
  cita: InfoCitaDTO[];
  alerta!: Alerta;
  tipoPqrs: string[];

  constructor(private pqrsService: PqrsService, private pacienteService: PacienteService, private tokenService: TokenService) {
    this.crearPqrsDTO = new CrearPqrsDTO();
    this.tipoPqrs = [];
    this.cita = [];
    this.cargarTipoPqrs();
    this.cargarCitasPaciente();
  }

  public crearPqrs() {

    this.pacienteService.crearPqrs(this.crearPqrsDTO).subscribe({
      next: data => {
        this.alerta = { mensaje: data.respuesta, tipo: "success" };
      },
      error: error => {
        this.alerta = { mensaje: error.error.mensaje, tipo: "danger" };
      }
    });
  }

  public cargarTipoPqrs() {

    this.pacienteService.listarTipoPqrs().subscribe({
      next: data => {
        this.tipoPqrs = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });

  }

  public cargarCitasPaciente() {

    let codigo = this.tokenService.getCodigo();

    this.pacienteService.listarCitas(codigo).subscribe({
      
      next: data => {
        this.cita = data.respuesta;
      },
      error: error => {
        this.alerta = { mensaje: error.error.mensaje, tipo: "danger" };
      }
    });
  }

  public seleccionar(codigoCita:number){
    this.crearPqrsDTO.codigoCita = codigoCita;
  }

}

