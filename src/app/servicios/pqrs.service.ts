import { Injectable } from '@angular/core';
import { InfoPqrsDTO } from '../modelo/info-pqrs-dto';
import { CrearPqrsDTO } from '../modelo/crear-pqrs-dto';

@Injectable({
  providedIn: 'root'
})
export class PqrsService {

  
  pqrs: InfoPqrsDTO[];
  
  
  constructor() {
    this.pqrs = [];
    this.pqrs.push({ codigo: 1, estado: 'ACTIVO', tipo: 'Peticion', fecha: '2023-10-12' });
    this.pqrs.push({ codigo: 2, estado: 'ACTIVO', tipo: 'Queja', fecha: '2023-09-29' });
    this.pqrs.push({ codigo: 3, estado: 'CERRADO', tipo: 'Reclamo', fecha: '2023-11-01' });
    this.pqrs.push({ codigo: 4, estado: 'ACTIVO', tipo: 'Sugerencia', fecha: '2023-09-07' });

  }

  public listar(): InfoPqrsDTO[] {
    return this.pqrs;
  }

  public obtener(codigo: number): InfoPqrsDTO | undefined{
    return this.pqrs.find(pqrs => pqrs.codigo == codigo);
  }

  public crear(pqrs: CrearPqrsDTO){
    let codigo = this.pqrs.length + 1;
    this.pqrs.push({ codigo: codigo, estado: 'ACTIVO', tipo: pqrs.tipoSolicitud, fecha: new Date().toISOString() });
  }

}