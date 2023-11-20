import { Injectable } from '@angular/core';
import { InfoPqrsDTO } from '../modelo/paciente/info-pqrs-dto';
import { CrearPqrsDTO } from '../modelo/paciente/crear-pqrs-dto';

@Injectable({
  providedIn: 'root'
})
export class PqrsService {

  
  pqrs: InfoPqrsDTO[];
  
  
  constructor() {
    this.pqrs = [];
    this.pqrs.push({ codigo: 1, estado: 'ACTIVO', tipo: 'Peticion', motivo: "Por favor necesito medicamentos", fechaCreacion: '2023-10-12'});
    this.pqrs.push({ codigo: 2, estado: 'ACTIVO', tipo: 'Queja', motivo: "Me atendieron a una hora diferente", fechaCreacion: '2023-09-29'});
    this.pqrs.push({ codigo: 3, estado: 'CERRADO', tipo: 'Reclamo', motivo: "No se me entregaron los medicamentos", fechaCreacion: '2023-11-01'});
    this.pqrs.push({ codigo: 4, estado: 'ACTIVO', tipo: 'Sugerencia', motivo: "Manejar un orden con las citas", fechaCreacion: '2023-09-07'});

  }

  public listar(): InfoPqrsDTO[] {
    return this.pqrs;
  }

  public obtener(codigo: number): InfoPqrsDTO | undefined{
    return this.pqrs.find(pqrs => pqrs.codigo == codigo);
  }

  public crear(pqrs: CrearPqrsDTO){
    let codigo = this.pqrs.length + 1;
    const fechaCompleta = new Date().toISOString(); //Genera fecha hasta con horas
    const fechaUsar = fechaCompleta.slice(0, 10); //Corta la fecha solo año, mes y dia
    this.pqrs.push({ codigo: codigo, estado: 'ACTIVO', tipo: pqrs.tipoSolicitud, fechaCreacion: fechaUsar, motivo: pqrs.motivo});
  }

}