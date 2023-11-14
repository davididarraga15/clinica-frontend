import { Component } from '@angular/core';
import { InfoPqrsDTO } from '../../../modelo/paciente/info-pqrs-dto';
import { PqrsService } from '../../../servicios/pqrs.service';
import { CrearPqrsDTO } from 'src/app/modelo/paciente/crear-pqrs-dto';

@Component({
  selector: 'app-gestion-pqrs',
  templateUrl: './gestion-pqrs.component.html',
  styleUrls: ['./gestion-pqrs.component.css']
})
export class GestionPqrsComponent {

  pqrs: InfoPqrsDTO[];
  auxPqrs: InfoPqrsDTO[];
  tipoSeleccionado: string = "";


  constructor(private pqrsService: PqrsService) {
    this.pqrs = pqrsService.listar();
    this.auxPqrs = this.pqrs;
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
