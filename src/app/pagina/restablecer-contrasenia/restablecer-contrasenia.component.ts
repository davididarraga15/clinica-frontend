import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestablecerContraseniaDTO } from 'src/app/modelo/restablecer-contrasenia-dto';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-reestablecer-contrasenia',
  templateUrl: './restablecer-contrasenia.component.html',
  styleUrls: ['./restablecer-contrasenia.component.css']
})
export class RestablecerContraseniaComponent {

  restablecerContraseniaDTO: RestablecerContraseniaDTO;
  correo: string = '';


  constructor(private route: ActivatedRoute, private authService: AuthService, private tokenService: TokenService) {
    this.restablecerContraseniaDTO = new RestablecerContraseniaDTO;
    this.route.params.subscribe(params => {
      this.correo = params['correo'];
      
    });
  }

  public cambiarPasssword(){

    this.restablecerContraseniaDTO.correo = this.correo;

  }

 
}
