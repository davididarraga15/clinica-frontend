import { Component } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-inicio-medico',
  templateUrl: './inicio-medico.component.html',
  styleUrls: ['./inicio-medico.component.css']
})
export class InicioMedicoComponent {

  correo: string = "";

  constructor(private tokenService: TokenService){}

  ngOnInit(): void {

  
    this.correo = this.tokenService.getEmail();
  
  }

}
