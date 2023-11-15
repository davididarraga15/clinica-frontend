import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImagenDTO } from '../modelo/extras/imagen-dto';
import { MensajeDTO } from '../modelo/extras/mensaje-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  private imgURL = "http://localhost:8080/imagenes";

  constructor(private http: HttpClient) { }

  public subir(imagen: FormData): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.imgURL}/subir`, imagen);
  }
  
  public eliminar(imagenDTO: ImagenDTO): Observable<MensajeDTO> {
    return this.http.request<MensajeDTO>('delete', `${this.imgURL}/eliminar`, {
      body:
        imagenDTO
    });
  }
}
