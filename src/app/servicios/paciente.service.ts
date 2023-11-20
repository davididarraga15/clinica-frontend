import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../modelo/extras/mensaje-dto';
import { Observable } from 'rxjs';
import { EditarPerfilPacienteDTO } from '../modelo/paciente/editar-perfil-paciente-dto';
import { CrearPqrsDTO } from '../modelo/paciente/crear-pqrs-dto';
import { AgendarCitaDTO } from '../modelo/paciente/agendar-cita-dto';
import { ItemFechaMedicoDTO } from '../modelo/paciente/item-fecha-medico-dto';



@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private userUrl = "http://localhost:8080/inicioPaciente";
  private clinicaUrl = "http://localhost:8080/api/auth";

  constructor(private http: HttpClient) { }

  public editarPerfil(pacienteDTO: EditarPerfilPacienteDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.userUrl}/infoPersonal/editarInfo`, pacienteDTO);
  }

  public eliminarCuenta(codigo: number): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.userUrl}/infoPersonal/eliminar/${codigo}`);
  }

  public crearPqrs(crearPqrsDTO: CrearPqrsDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.userUrl}/pqrs/crear`, crearPqrsDTO);
  }

  public listarPqrsPaciente(codigoPaciente: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/pqrs/listar/${codigoPaciente}`);
  }
  public verDetallePqrs(codigoPqrs: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/pqrs/verDetalle/${codigoPqrs}`);
  }

  public agendarCita(citaDTO: AgendarCitaDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.userUrl}/citasMedicas/agendar`, citaDTO);
  }

  public listarCitas(codigoPaciente: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/historialCitas/listar/${codigoPaciente}`);
  }

  public listarEspecialidades(): Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.clinicaUrl}/listarEspecialidades`);
  }

  public listarTipoPqrs(): Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.clinicaUrl}/listarTipoPqrs`);
  }

  public listarMedicosEspecialidad(especialidad: number): Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.userUrl}/citasMedicas/medicos-especialidad/${especialidad}`);
  }

  public listarFechasMedico(idMedico: number): Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.userUrl}/citasMedicas/fechasMedico/${idMedico}`);
  }

  
}
