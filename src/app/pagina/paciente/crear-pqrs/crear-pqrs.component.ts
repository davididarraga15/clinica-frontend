import { Component } from '@angular/core';
import { CrearPqrsDTO } from 'src/app/modelo/paciente/crear-pqrs-dto';
import { PqrsService } from 'src/app/servicios/pqrs.service';

@Component({
  selector: 'app-crear-pqrs',
  templateUrl: './crear-pqrs.component.html',
  styleUrls: ['./crear-pqrs.component.css']
})
export class CrearPqrsComponent {

  crearPqrsDTO: CrearPqrsDTO;

  constructor(private pqrsService: PqrsService) {
    this.crearPqrsDTO = new CrearPqrsDTO();
  }

  public crearPqrs(){
    this.pqrsService.crear(this.crearPqrsDTO);
  }

  public seleccionar(codigoCita:number){
    this.crearPqrsDTO.codigoCita = codigoCita;
  }

}

