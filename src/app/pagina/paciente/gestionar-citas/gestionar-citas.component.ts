import { Component } from '@angular/core';
import { InfoCitaDTO } from 'src/app/modelo/paciente/info-cita-dto';
import { CitaService } from 'src/app/servicios/cita.service';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Alerta } from 'src/app/modelo/alerta';

@Component({
  selector: 'app-gestionar-citas',
  templateUrl: './gestionar-citas.component.html',
  styleUrls: ['./gestionar-citas.component.css']
})
export class GestionarCitasComponent {

  cita: InfoCitaDTO[];
  infoCitaDTO: InfoCitaDTO;
  //agendarCita2DTO : InfoCitaDTO [];
  
  citaAgendada: InfoCitaDTO [];

  alerta!: Alerta;


  constructor(private citaService: CitaService, private pacienteService: PacienteService, private tokenService: TokenService) {
    this.cita = [];
    this.infoCitaDTO = new InfoCitaDTO();
    this.citaAgendada = citaService.listar();
    this.cargarCitasPaciente();
  
  }

  public cargarCitasPaciente() {

    let codigo = this.tokenService.getCodigo();

    this.pacienteService.listarCitas(codigo).subscribe({
      
      next: data => {
        this.cita = data.respuesta;
      },
      error: error => {
        this.alerta = { mensaje: error.error.mensaje, tipo: "danger" };
      }
    });
  }



  public seleccionar(codigo:number){
    this.infoCitaDTO.codigo = codigo;
  }

 
}
