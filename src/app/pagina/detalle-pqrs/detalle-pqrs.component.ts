import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrearPqrsDTO } from 'src/app/modelo/crear-pqrs-dto';
import { InfoPqrsDTO } from 'src/app/modelo/info-pqrs-dto';
import { PqrsService } from 'src/app/servicios/pqrs.service';

@Component({
  selector: 'app-detalle-pqrs',
  templateUrl: './detalle-pqrs.component.html',
  styleUrls: ['./detalle-pqrs.component.css']
})
export class DetallePqrsComponent {

  codigoPqrs: string = "";
  pqrs: InfoPqrsDTO | undefined;
  

  constructor( private route:ActivatedRoute, private pqrsService:PqrsService ) {

    this.route.params.subscribe( params => {
      this.codigoPqrs = params['codigo'];

      let pqrsConsultado = pqrsService.obtener(parseInt(this.codigoPqrs));

      if ( pqrsConsultado != undefined ) {
        this.pqrs = pqrsConsultado;
      }

    });
  
  }
}
