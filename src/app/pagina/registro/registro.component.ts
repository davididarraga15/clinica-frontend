import { Component } from '@angular/core';
import { RegistroPacienteDTO } from 'src/app/modelo/registro-paciente-dto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  registroPacienteDTO: RegistroPacienteDTO;

  constructor(){
    this.registroPacienteDTO = new RegistroPacienteDTO();
  }

  public registrar(){
    console.log(this.registroPacienteDTO);
  }



}
