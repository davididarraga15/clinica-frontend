import { Component } from '@angular/core';
import { InfoPqrsDTO } from '../../../modelo/paciente/info-pqrs-dto';
import { PacienteService } from '../../../servicios/paciente.service';
import { PqrsService } from '../../../servicios/pqrs.service';
import { CrearPqrsDTO } from 'src/app/modelo/paciente/crear-pqrs-dto';
import { TokenService } from 'src/app/servicios/token.service';
import { Alerta } from 'src/app/modelo/alerta';

@Component({
  selector: 'app-gestion-pqrs',
  templateUrl: './gestion-pqrs.component.html',
  styleUrls: ['./gestion-pqrs.component.css']
})
export class GestionPqrsComponent {

  pqrs: InfoPqrsDTO[];
  auxPqrs: InfoPqrsDTO[];
  tipoSeleccionado: string = "";
  tipoPqrs: string[];

  alerta!: Alerta;


  constructor(private pacienteService: PacienteService, private tokenService: TokenService) {
    //this.pqrs = pqrsService.listar();
    //this.auxPqrs = this.pqrs;

    this.pqrs = [];
    this.auxPqrs = [];
    this.tipoPqrs = [];
    this.cargarPqrsPaciente();
    this.cargarTipoPqrs();
  }

  public cargarPqrsPaciente() {

    let codigo = this.tokenService.getCodigo();

    this.pacienteService.listarPqrsPaciente(codigo).subscribe({
      
      next: data => {
        this.pqrs = data.respuesta;
        this.auxPqrs = Array.from(this.pqrs);
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
  

  public filtrarTabla(event: any) {
    let tipoSeleccionado = event.target.value;

    if(tipoSeleccionado == ""){
      this.auxPqrs = this.pqrs;
    }else{
      this.auxPqrs = this.pqrs.filter(pqrs => pqrs.tipo == tipoSeleccionado);
    }
  }


}
