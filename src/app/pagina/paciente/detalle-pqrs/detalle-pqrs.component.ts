import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrearPqrsDTO } from 'src/app/modelo/paciente/crear-pqrs-dto';
import { InfoPqrsDTO } from 'src/app/modelo/paciente/info-pqrs-dto';
import { PqrsService } from 'src/app/servicios/pqrs.service';
import { TokenService } from 'src/app/servicios/token.service';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { Alerta } from 'src/app/modelo/alerta';

@Component({
  selector: 'app-detalle-pqrs',
  templateUrl: './detalle-pqrs.component.html',
  styleUrls: ['./detalle-pqrs.component.css']
})
export class DetallePqrsComponent {

  codigoPqrs: number = 0;
  pqrs: InfoPqrsDTO | undefined;
  alerta!: Alerta;
  

  constructor( private route:ActivatedRoute, private pqrsService:PqrsService, private tokenService:TokenService, private pacienteService:PacienteService) {

    this.route.params.subscribe( params => {
      this.codigoPqrs = parseInt(params['codigo']);

    }); 

    this.cargarDetallePqrsPaciente();
  
  }

  public cargarDetallePqrsPaciente() {

    this.pacienteService.verDetallePqrs(this.codigoPqrs).subscribe({
      
      next: data => {
        console.log(data.error);
        this.pqrs = data.respuesta;
        //this.auxPqrs = Array.from(this.pqrs);
      },
      error: error => {
        this.alerta = { mensaje: error.error.mensaje, tipo: "danger" };
      }
    });
  }
}
