import { Component } from '@angular/core';
import { RegistroPacienteDTO } from 'src/app/modelo/paciente/registro-paciente-dto';
import { AuthService } from 'src/app/servicios/auth.service';
import { ClinicaService } from 'src/app/servicios/clinica.service';

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


  constructor(private authService: AuthService, private clinicaService: ClinicaService){
    this.registroPacienteDTO = new RegistroPacienteDTO();
    this.eps = [];
    this.cargarEps();
    this.tipoSangre = [];
    this.cargarTipoSangre();
  }

  public registrar(){

    if(this.archivos != null && this.archivos.length > 0){
      console.log(this.registroPacienteDTO);
    }else{
      console.log("Debe cargar una foto");
      this.mensajeConsola = "Debe cargar una foto";
    }
  }

  public sonIguales():boolean{
    return this.registroPacienteDTO.contrasenia == this.registroPacienteDTO.confirmarContrasenia;
  }

  public cargarTipoSangre() {
    this.tipoSangre.push("A+");
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
    this.eps.push("SURA");
    this.clinicaService.listarEPS().subscribe({
      next: data => {
        this.eps = data.respuesta;
      },
      error: error => {
        console.log(error);
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