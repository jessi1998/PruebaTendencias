import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Lugar } from '../modelos/lugar.modelos';


@Injectable({
  providedIn: 'root'
})
export class LugarService {

  constructor(private http: HttpClient) { }

  private urlapi ='http://100.25.138.187/lugar'
 
  getAllLugar(): Observable<Lugar[]>{
  return this.http.get<Lugar[]>(this.urlapi);
  }
  
  addNewLugar(lugar:Lugar):Observable<Lugar>{
    return this.http.post<Lugar>(this.urlapi,lugar)
  }
}
