import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../modelo/extras/mensaje-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {

  private clinicaURL = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  public listarEPS(): Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.clinicaURL}/listarEps`);
  }


  public listarTipoSangre(): Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.clinicaURL}/listarTipoSangre`);
  }

  public listarEspecialidades(): Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.clinicaURL}/listarEspecialidades`);
  }

  


}
