import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Buffer } from 'buffer';

const TOKEN_KEY = "AuthToken";


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router) { }

  public setToken(token: string){

    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null{
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public isLogged(): boolean{

    if(this.getToken()){
      return true;
    }
    return false;
  }

  public logout(){
    window.sessionStorage.clear();
    this.router.navigate(["/login"]).then(() => {
      window.location.reload();
    });
  }

  public login(token: string){
    this.setToken(token);
    this.router.navigate(["/"]).then(() => {
      window.location.reload();
    });
  }

  private decodePlayLoad(token: string): any{
    const playLoad = token!.split('.')[1];
    const playLoadDecode = Buffer.from(playLoad, 'base64').toString('ascii');
    const values = JSON.parse(playLoadDecode);
    return values;
  }

  public getEmail():string{
    const token = this.getToken();
    if(token){
      const values = this.decodePlayLoad(token);
      return values.sub;
    }
    return "";
  }

  public getRole():string{
    const token = this.getToken();
    if(token){
      const values = this.decodePlayLoad(token);
      return values.rol;
    }
    return "";
  }

}
