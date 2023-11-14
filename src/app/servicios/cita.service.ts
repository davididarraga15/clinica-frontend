import { Injectable } from '@angular/core';
import { InfoCitaDTO } from '../modelo/paciente/info-cita-dto';
import { AgendarCitaDTO } from '../modelo/paciente/agendar-cita-dto';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  infoCita: InfoCitaDTO[];
  cita: AgendarCitaDTO[];
  

  constructor() {
    this.infoCita = [];
    this.cita = [];

    this.infoCita.push({
      codigo: 1, especialidad: "NEUROLOGIA", fechaCita: '2023-09-29', horaCita: "7:00", nombreMedico: "pepe", nombrePaciente: "pepe"
    });

    this.infoCita.push({
      codigo: 2, especialidad: "NEUROLOGIA", fechaCita: '2023-09-29', horaCita: "7:00", nombreMedico: "pepe2", nombrePaciente: "pepe2"
    });

  }

  public listar(): InfoCitaDTO[] {
    return this.infoCita;
  }
  public obtener(codigo: number): InfoCitaDTO | undefined {
    return this.infoCita.find(infoCita => infoCita.codigo == codigo);
  }
  public agendarCita(cita: AgendarCitaDTO) {
    let codigo = this.cita.length + 1;
    this.cita.push({
      codigoMedico: cita.codigoMedico, codigoPaciente: cita.codigoPaciente,motivoCita: cita.motivoCita, fechaCita: cita.fechaCita, horaCita: cita.horaCita
    })
  }

}
