import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Buffer } from 'buffer';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor( private router: Router) { }

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

  public login(token: string){
    this.setToken(token);
    this.router.navigate(['/']);
  }

  public logout(){
    window.sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  private decodePlayLoad(token: string): any{
    const playLoad = token!.split('.')[1];
    const playLoadDecode = Buffer.from(playLoad, 'base64').toString('ascii');
    const values = JSON.parse(playLoadDecode);
    return values;
  }



}
