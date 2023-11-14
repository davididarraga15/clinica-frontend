import { Component } from '@angular/core';
import { InfoCitaDTO } from 'src/app/modelo/paciente/info-cita-dto';
import { CitaService } from 'src/app/servicios/cita.service';

@Component({
  selector: 'app-gestionar-citas',
  templateUrl: './gestionar-citas.component.html',
  styleUrls: ['./gestionar-citas.component.css']
})
export class GestionarCitasComponent {

  cita: InfoCitaDTO[];
  infoCitaDTO: InfoCitaDTO;


  constructor(private citaService: CitaService) {
    this.cita = citaService.listar();
    this.infoCitaDTO = new InfoCitaDTO();
  
  }

  public seleccionar(codigo:number){
    this.infoCitaDTO.codigo = codigo;
  }

 
}
