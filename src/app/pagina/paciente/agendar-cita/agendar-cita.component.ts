import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { AgendarCitaDTO } from 'src/app/modelo/paciente/agendar-cita-dto';
import { InfoCitaDTO } from 'src/app/modelo/paciente/info-cita-dto';
import { ItemFechaMedicoDTO } from 'src/app/modelo/paciente/item-fecha-medico-dto';
import { ItemMedicoDTO } from 'src/app/modelo/paciente/item-medico-dto';
import { CitaService } from 'src/app/servicios/cita.service';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})
export class AgendarCitaComponent {

  agendarCitaDTO: AgendarCitaDTO;
   ///
  citaPacienteMedico: InfoCitaDTO [];
  auxCitaPacienteMedico: InfoCitaDTO [];

  itemFechaMedicoDTO: ItemFechaMedicoDTO[];
  itemMedicoDTO: ItemMedicoDTO[];
  
  especialidadSeleccionada: string = "";
  alerta!: Alerta;
  especialidades:string[];


  constructor(private citaService: CitaService, private pacienteService: PacienteService, private tokenService: TokenService) {
    this.agendarCitaDTO = new AgendarCitaDTO();
    
    this.citaPacienteMedico = citaService.listarCitaPacienteMedico();
    this.auxCitaPacienteMedico = this.citaPacienteMedico;
    this.especialidades = [];
    this.itemFechaMedicoDTO = [];
    this.itemMedicoDTO=[];
    this.cargarEspecialidades();
    this.buscarCitas();
  }

  public agendarCita(){
    this.pacienteService.agendarCita(this.agendarCitaDTO).subscribe({
      next: data => {
        this.alerta = { mensaje: data.respuesta, tipo: "success" };
      },
      error: error => {
        this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
      }
    });
  }

  public buscarCitas() {

    let codigoMedico = 3;
    this.pacienteService.listarFechasMedico(codigoMedico).subscribe({
      next: data => {
        this.itemFechaMedicoDTO = data.respuesta;
      },
      error: error => {
        this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
        this.itemFechaMedicoDTO=[]
      }
    });
  }
  

  public seleccionar(codigo:number){
    this.agendarCitaDTO.codigoCita = codigo;
  }


  public filtrarTabla(event: any) {
    let especialidadSeleccionada = event.target.value;

    if(especialidadSeleccionada == ""){
      this.auxCitaPacienteMedico = this.citaPacienteMedico;
    }else{
      this.auxCitaPacienteMedico = this.citaPacienteMedico.filter(c => c.especialidad == especialidadSeleccionada);
    }
  }

  public cargarEspecialidades() {
    this.pacienteService.listarEspecialidades().subscribe({
      next: data => {
        this.especialidades = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });
  }



  //public agendarCitaDos() {
   // this.citaService.agendarCitaDos(this.agendarCitaDTO);
  //}

}
