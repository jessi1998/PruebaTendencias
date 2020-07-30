import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Direccion } from '../modelos/direccion.modelos';


@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  constructor(private http: HttpClient) { }

  getQuery(query: string){
    const url = `http://localhost:80/${query}`;
    console.log(url);
    return this.http.get(url);
}
getDireccion(): Observable<any>{
    const url='direccion';
    return this.getQuery(url);

}

getDireccionById(id: string) {
  const url = 'direccion';
return this.getQuery(url);
}
}
