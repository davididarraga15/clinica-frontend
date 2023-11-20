import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { EditarPerfilPacienteDTO } from 'src/app/modelo/paciente/editar-perfil-paciente-dto';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-gestion-info-personal',
  templateUrl: './gestion-info-personal.component.html',
  styleUrls: ['./gestion-info-personal.component.css']
})
export class GestionInfoPersonalComponent {

  archivos!: FileList;
  archivoCargado:string = "";
  mensajeConsola: string = "";

  editarPerfilPacienteDTO: EditarPerfilPacienteDTO;
  alerta!: Alerta;

  constructor(private tokenService: TokenService, private pacienteService: PacienteService, private imagenService: ImagenService) {
    this.editarPerfilPacienteDTO = new EditarPerfilPacienteDTO();
    this.actualizar();
    this.eliminarCuenta();
  
  }

  public actualizar() {

    let codigoPaciente = this.tokenService.getCodigo();

    if (this.editarPerfilPacienteDTO.fotoUrl.length != 0) {
      this.pacienteService.editarPerfil(this.editarPerfilPacienteDTO).subscribe({
        next: data => {
          this.alerta = { mensaje: data.respuesta, tipo: "success" };
        },
        error: error => {
          this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
        }
      });
    } else {
      this.alerta = { mensaje: "Debe subir una imagen", tipo: "danger" };
    }
  }

  public eliminarCuenta() {

    let codigoPaciente = this.tokenService.getCodigo();

    this.pacienteService.eliminarCuenta(codigoPaciente).subscribe({
      next: data => {
        this.alerta = { mensaje: data.respuesta, tipo: "success" };
      },
      error: error => {
        this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
      }
    });

  }


  public onFileChange(event:any){
    if (event.target.files.length > 0) {
      const files = event.target.files;
      this.archivoCargado = files[0].name;
      console.log(files);
      this.archivos = event.target.files;
    }
  }

}
