import { Component } from '@angular/core';
import { RegistroPacienteDTO } from 'src/app/modelo/registro-paciente-dto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  registroPacienteDTO: RegistroPacienteDTO;


  eps:string[];
  tipoSangre:string[];
  archivos!:FileList;




  constructor(){
    this.registroPacienteDTO = new RegistroPacienteDTO();
    this.eps = [];
    this.cargarEps();
    this.tipoSangre = [];
    this.cargarTipoSangre();
  }

  public registrar(){
    console.log(this.registroPacienteDTO);

    if(this.archivos != null && this.archivos.length > 0){
      console.log(this.registroPacienteDTO);
    }else{
      console.log("Debe cargar una foto");
    }
  }

  public sonIguales():boolean{
    return this.registroPacienteDTO.contrasenia == this.registroPacienteDTO.confirmarContrasenia;
  }

  private cargarEps(){
    this.eps.push("Sanitas");
    this.eps.push("Nueva EPS");
    this.eps.push("Sura");
    this.eps.push("Salud Total");
  }

  private cargarTipoSangre(){
    this.tipoSangre.push("A+");
    this.tipoSangre.push("O+");
    this.tipoSangre.push("B+");
    this.tipoSangre.push("AB+");
    this.tipoSangre.push("A-");
    this.tipoSangre.push("O-");
    this.tipoSangre.push("B-");
    this.tipoSangre.push("AB-");
  }

  public onFileChange(event:any){
    if (event.target.files.length > 0) {
      const files = event.target.files;
      console.log(files);
    }
    this.archivos = event.target.files;
  }

}