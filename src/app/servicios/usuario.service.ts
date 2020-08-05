import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Usuario } from '../modelos/usuario.modelos';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) { }
  private urlapi = 'http://100.24.242.184/usuario';

  addNewUser(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.urlapi, user);
  }

  loginuser(email: string, password: string): Observable<Usuario> {
    const url_api = 'http://100.24.242.184/usuario/login';
    return this.http.post<Usuario>(url_api, { email, password })
  }

}
