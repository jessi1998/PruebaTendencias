import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Usuario } from '../modelos/usuario.modelos';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  /*
  nombre_usuario_in: string;
  apellido_usuario_in: string;
  direccion_usuario_in: string;
  correo_usuario_in: string;
  password_usuario_in: string;
  */
  constructor(private http: HttpClient) { }
/*
  getQuery(query: string){
    const url = `http://localhost:80/${query}`;
    console.log(url);
    return this.http.get(url);
}
getUsuario(): Observable<any>{
    const url = 'usuario';
    return this.getQuery(url);

}

getUsuarioById(id: string) {
  const url = 'usuario';
return this.getQuery(url);
}

getDate(nombre_usuario_get: string, apellido_usuario_get: string,
   direccion_usuario_get: string, correo_usuario_get: string, password_usuario_get: string){
  this.nombre_usuario_in = nombre_usuario_get;
  this.apellido_usuario_in = apellido_usuario_get;
  this.direccion_usuario_in = direccion_usuario_get;
  this.correo_usuario_in = correo_usuario_get;
  this.password_usuario_in = password_usuario_get;
  
}*/
// tslint:disable-next-line: adjacent-overload-signature
}
