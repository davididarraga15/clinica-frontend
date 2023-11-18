import { Component } from '@angular/core';
import { RegistroPacienteDTO } from 'src/app/modelo/paciente/registro-paciente-dto';
import { AuthService } from 'src/app/servicios/auth.service';
import { ClinicaService } from 'src/app/servicios/clinica.service';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { Alerta } from 'src/app/modelo/alerta';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  registroPacienteDTO: RegistroPacienteDTO;

  archivoCargado:string = "";
  eps:string[];
  tipoSangre:string[];
  archivos!:FileList;
  mensajeConsola: string = "";


  alerta!: Alerta;


  constructor(private authService: AuthService, private clinicaService: ClinicaService, private imagenService: ImagenService){
    this.registroPacienteDTO = new RegistroPacienteDTO();
    this.eps = [];
    this.cargarEps();
    this.tipoSangre = [];
    this.cargarTipoSangre();
  }

  public registrar(){

    if (this.registroPacienteDTO.fotoUrl.length != 0){
      
      this.authService.registrarPaciente(this.registroPacienteDTO).subscribe({
        next: data => {
          this.alerta = { mensaje: data.respuesta, tipo: "success" };
        },
        error: error => {
          this.alerta = { mensaje: error.error.mensaje, tipo: "danger" };
        }
      });

    }else{
      console.log("Debe subir una imagen");
      this.alerta = { mensaje: "Debe subir una imagen", tipo: "danger" };
    }

  }

  public sonIguales():boolean{
    return this.registroPacienteDTO.contrasenia == this.registroPacienteDTO.confirmarContrasenia;
  }

  public cargarTipoSangre() {
    this.clinicaService.listarTipoSangre().subscribe({
      next: data => {
        this.tipoSangre = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  public cargarEps() {

    this.clinicaService.listarEPS().subscribe({
      next: data => {
        this.eps = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  public subirImagen() {

    if (this.archivos != null && this.archivos.length > 0) {
      const formData = new FormData();
      formData.append('file', this.archivos[0]);

      this.imagenService.subir(formData).subscribe({
        next: data => {
          this.registroPacienteDTO.fotoUrl = data.respuesta.url;
        },
        error: error => {
          this.alerta = { mensaje: error.error.mensaje, tipo: "danger" };
        }
      });

    }else {
      this.alerta = { mensaje: 'Debe seleccionar una imagen y subirla', tipo: "danger" };
    }
  }

  

  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.registroPacienteDTO.fotoUrl = event.target.files[0].name;
      const files = event.target.files;
      this.archivoCargado = files[0].name;
      this.archivos = event.target.files;
    }
  }


}