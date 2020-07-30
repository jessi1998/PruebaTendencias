import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Usuario } from '../modelos/usuario.modelos';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

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
}
