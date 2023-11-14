import { Component } from '@angular/core';
import { EditarPerfilPacienteDTO } from 'src/app/modelo/paciente/editar-perfil-paciente-dto';

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

  constructor() {
    this.editarPerfilPacienteDTO = new EditarPerfilPacienteDTO();
  
  }

  public actualizar(){
    if(this.archivos != null && this.archivos.length > 0){
      console.log(this.editarPerfilPacienteDTO);
    }else{
      console.log("Debe cargar una foto");
      this.mensajeConsola = "Debe cargar una foto";
 
    }
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
