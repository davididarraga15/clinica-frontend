import { Component } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-inicio-paciente',
  templateUrl: './inicio-paciente.component.html',
  styleUrls: ['./inicio-paciente.component.css']
})
export class InicioPacienteComponent {

  correo: string = "";

  constructor(private tokenService: TokenService){}

  ngOnInit(): void {

  
    this.correo = this.tokenService.getEmail();
  
  }
  

}
