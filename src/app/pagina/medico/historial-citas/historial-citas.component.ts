import { Component } from '@angular/core';
import { InfoCitaDTO } from 'src/app/modelo/paciente/info-cita-dto';
import { CitaService } from 'src/app/servicios/cita.service';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Alerta } from 'src/app/modelo/alerta';

@Component({
  selector: 'app-historial-citas',
  templateUrl: './historial-citas.component.html',
  styleUrls: ['./historial-citas.component.css']
})
export class HistorialCitasComponent {

  cita: InfoCitaDTO[];
  infoCitaDTO: InfoCitaDTO;
  //agendarCita2DTO : InfoCitaDTO [];
  
  

  alerta!: Alerta;


  constructor(private citaService: CitaService, private pacienteService: PacienteService, private tokenService: TokenService) {
    this.cita = citaService.listarCitasMedico();
    this.infoCitaDTO = new InfoCitaDTO();
    
    
  
  }

  public cargarCitasPaciente() {

   
  }



  public seleccionar(codigo:number){
    this.infoCitaDTO.codigo = codigo;
  }

}
