import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../modelo/extras/mensaje-dto';
import { Observable } from 'rxjs';
import { EditarPerfilPacienteDTO } from '../modelo/paciente/editar-perfil-paciente-dto';
import { CrearPqrsDTO } from '../modelo/paciente/crear-pqrs-dto';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private userUrl = "http://localhost:8080/inicioPaciente";

  constructor() { }

  public editarPerfil(pacienteDTO: EditarPerfilPacienteDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.userUrl}/infoPersonal/editarInfoPersonal`, pacienteDTO);
  }

  public eliminarCuenta(codigo: number): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.userUrl}/infoPersonal/eliminar/${codigo}`);
  }

  public crearPqrs(crearPqrsDTO: CrearPqrsDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/pqrs/crear`, crearPqrsDTO);
  }

  public listarPqrsPaciente(codigoPaciente: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/pqrs/listar/${codigoPaciente}`);
    }


}
