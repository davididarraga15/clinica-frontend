import { Injectable } from '@angular/core';
import { InfoCitaDTO } from '../modelo/paciente/info-cita-dto';
import { AgendarCitaDTO } from '../modelo/paciente/agendar-cita-dto';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  cita: InfoCitaDTO[];
  

  constructor() {
    this.cita = [];

    this.cita.push({
      codigo: 1, especialidad: "NEUROLOGIA", fechaCita: '2023-09-29', horaCita: "7:00", nombreMedico: "pepe", nombrePaciente: "pepe3"
    });

    this.cita.push({
      codigo: 2, especialidad: "NEUROLOGIA", fechaCita: '2023-09-29', horaCita: "7:00", nombreMedico: "pepe2", nombrePaciente: "pepe23"
    });

  }

  public listar(): InfoCitaDTO[] {
    return this.cita;
  }

  public obtener(codigo: number): InfoCitaDTO | undefined {
    return this.cita.find(cita => cita.codigo == codigo);
  }

  public agendarCita(cita: AgendarCitaDTO) {
    let codigo = this.cita.length + 1;

    this.cita.push({ codigo: codigo, especialidad: cita.especialidad, fechaCita: cita.fechaCita, horaCita: cita.horaCita, nombreMedico: cita.nombreMedico, nombrePaciente: cita.nombrePaciente });    
  }


  //info : agendar
}
