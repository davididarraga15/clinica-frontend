import { Component} from '@angular/core';
import { TokenService } from './servicios/token.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Clinica Salvese quien pueda';
  isLogged = false;
  correo: string = "";


  constructor(private tokenService: TokenService){}

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
    if(this.isLogged){
      this.correo = this.tokenService.getEmail();
    }
    
  }

  public logout(){
    this.tokenService.logout();
  }

}

