import { HttpClient } from '@angular/common/http';
import { MensajeDTO } from '../modelo/extras/mensaje-dto';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { InfoCitaDTO } from '../modelo/paciente/info-cita-dto';
import { AgendarCitaDTO } from '../modelo/paciente/agendar-cita-dto';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  cita: InfoCitaDTO[];
  citaPacienteMedico: InfoCitaDTO[]; //Son las citas disponbibles que se muestran al momento de agendar cita 
  //private clinicaURL = 'http://localhost:8080/api/auth';
  

  constructor( http: HttpClient) {
    this.cita = [];

    this.cita.push({
      codigo: 1, especialidad: "Neurologia", fechaCita: '2023-09-29', horaCita: "7:00", nombreMedico: "pepe", nombrePaciente: "pepe3"
    });

    this.cita.push({
      codigo: 2, especialidad: "Medicina general", fechaCita: '2023-09-29', horaCita: "7:00", nombreMedico: "pepe2", nombrePaciente: "pepe23"
    });


    this.citaPacienteMedico = [];

    this.citaPacienteMedico.push({
      codigo: 1, especialidad: "Neurologia", fechaCita: '2023-09-29', horaCita: "7:00", nombreMedico: "Dr. Muñoz", nombrePaciente: "pepe3"
    });

    this.citaPacienteMedico.push({
      codigo: 2, especialidad: "Medicina general", fechaCita: '2023-09-29', horaCita: "7:00", nombreMedico: "pepe23", nombrePaciente: "pepe23"
    });

    this.citaPacienteMedico.push({
      codigo: 3, especialidad: "Pediatria", fechaCita: '2023-09-29', horaCita: "7:00", nombreMedico: "pepe23", nombrePaciente: "pepe23"
    });


  }

  public listar(): InfoCitaDTO[] {
    return this.cita;
  }

  public listarCitaPacienteMedico(): InfoCitaDTO[] {
    return this.citaPacienteMedico;
  }

  public obtener(codigo: number): InfoCitaDTO | undefined {
    return this.cita.find(cita => cita.codigo == codigo);
  }

  public obtenerCitaPacienteMedico(codigo: number): InfoCitaDTO | undefined {
    return this.citaPacienteMedico.find(citaPacienteMedico => citaPacienteMedico.codigo == codigo);
  }

  public agendarCita(cita: AgendarCitaDTO) {
    let codigo = this.cita.length + 1;

    this.cita.push({ codigo: codigo, especialidad: cita.especialidad, fechaCita: cita.fechaCita, horaCita: cita.horaCita, nombreMedico: cita.nombreMedico, nombrePaciente: cita.nombrePaciente });    
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////




  //info : agendar
}
