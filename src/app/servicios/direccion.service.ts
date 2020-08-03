import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Direccion } from '../modelos/direccion.modelos';


@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  constructor(private http: HttpClient) { }

  private urlapi ='http://100.25.138.187/direccion'

  addNewDireccion(direccion:Direccion):Observable<Direccion>{
    return this.http.post<Direccion>(this.urlapi,direccion)
  }
 
}
