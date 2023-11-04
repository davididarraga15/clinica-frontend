import { Component } from '@angular/core';
import { InfoPqrsDTO } from '../../modelo/info-pqrs-dto';
import { PqrsService } from '../../servicios/pqrs.service';

@Component({
  selector: 'app-gestion-pqrs',
  templateUrl: './gestion-pqrs.component.html',
  styleUrls: ['./gestion-pqrs.component.css']
})
export class GestionPqrsComponent {

  pqrs: InfoPqrsDTO[];


  constructor(private pqrsService: PqrsService) {
    this.pqrs = pqrsService.listar();
  }


    

}
