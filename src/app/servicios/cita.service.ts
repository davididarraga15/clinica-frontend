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
  citasMedico: InfoCitaDTO[]; //Son las citas que tiene el medico
  

  constructor(private http: HttpClient) {
    this.cita = [];

    this.cita.push({
      codigo: 1, especialidad: "Neurologia", fechaCita: '2023-09-29', horaCita: "7:00", nombreMedico: "pepe", nombrePaciente: "pepe3"
    });

    this.cita.push({
      codigo: 2, especialidad: "Medicina general", fechaCita: '2023-09-29', horaCita: "7:00", nombreMedico: "pepe2", nombrePaciente: "pepe23"
    });


    this.citaPacienteMedico = [];

    this.citaPacienteMedico.push({
      codigo: 1005, especialidad: "ODONTOLOGIA", fechaCita: '2023-12-24T12:30:00', horaCita: "15:30", nombreMedico: "MedicoDos", nombrePaciente: "pepe3"
    });

    this.citaPacienteMedico.push({
      codigo: 1006, especialidad: "MEDICINA_GENERAL", fechaCita: '2023-11-18T20:30:00', horaCita: "7:30", nombreMedico: "MedicoUno", nombrePaciente: "PacienteUno"
    });

    this.citaPacienteMedico.push({
      codigo: 1007, especialidad: "ODONTOLOGIA", fechaCita: '2023-12-18T19:30:00', horaCita: "13:00", nombreMedico: "MedicoDos", nombrePaciente: "pepe23"
    });

    this.citasMedico = [];

    this.citasMedico.push({
      codigo: 1005, especialidad: "MEDICINA_GENERAL", fechaCita: '2023-12-24T12:30:00', horaCita: "15:30", nombreMedico: "MedicoUno", nombrePaciente: "PacienteDos"
    });

    this.citasMedico.push({
      codigo: 1006, especialidad: "MEDICINA_GENERAL", fechaCita: '2023-11-18T20:30:00', horaCita: "7:30", nombreMedico: "MedicoUno", nombrePaciente: "PacienteUno"
    });

    this.citasMedico.push({
      codigo: 1007, especialidad: "MEDICINA_GENERAL", fechaCita: '2023-12-18T19:30:00', horaCita: "13:00", nombreMedico: "MedicoUno", nombrePaciente: "PacienteTres"
    });


  }

  public listar(): InfoCitaDTO[] {
    return this.citaPacienteMedico;
  }

  public listarCitaPacienteMedico(): InfoCitaDTO[] {
    return this.citaPacienteMedico;
  }
  public listarCitasMedico(): InfoCitaDTO[] {
    return this.citasMedico;
  }

  public obtener(codigo: number): InfoCitaDTO | undefined {
    return this.cita.find(cita => cita.codigo == codigo);
  }

  public obtenerCitaPacienteMedico(codigo: number): InfoCitaDTO | undefined {
    return this.citaPacienteMedico.find(citaPacienteMedico => citaPacienteMedico.codigo == codigo);
  }

  public obtenerCitasMedico(codigo: number): InfoCitaDTO | undefined {
    return this.citasMedico.find(citasMedico => citasMedico.codigo == codigo);
  }

  public agendarCitaDos(cita: AgendarCitaDTO) {
    let codigo = this.cita.length + 1;

    this.cita.push({ codigo: codigo, especialidad: cita.especialidad, fechaCita: cita.fechaCita, horaCita: cita.horaCita, nombreMedico: cita.nombreMedico, nombrePaciente: cita.nombrePaciente });    
  }
  
  public agendarCitasMedico(cita: AgendarCitaDTO) {
    let codigo = this.citasMedico.length + 1;

    this.citasMedico.push({ codigo: codigo, especialidad: cita.especialidad, fechaCita: cita.fechaCita, horaCita: cita.horaCita, nombreMedico: cita.nombreMedico, nombrePaciente: cita.nombrePaciente });    
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////




  //info : agendar
}
