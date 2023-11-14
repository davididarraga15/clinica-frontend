import { Component } from '@angular/core';
import { AgendarCitaDTO } from 'src/app/modelo/paciente/agendar-cita-dto';
import { InfoCitaDTO } from 'src/app/modelo/paciente/info-cita-dto';
import { CitaService } from 'src/app/servicios/cita.service';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})
export class AgendarCitaComponent {

  agendarCitaDTO: AgendarCitaDTO;

  constructor(private citaService: CitaService) {
    this.agendarCitaDTO = new AgendarCitaDTO();
  }

  public agendarCita(){
    this.citaService.agendarCita(this.agendarCitaDTO);
  }

  public seleccionar(codigo:number){
    this.agendarCitaDTO.codigoCita = codigo;
  }

}
