import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Lugar } from '../modelos/lugar.modelos';


@Injectable({
  providedIn: 'root'
})
export class LugarService {

  constructor(private http: HttpClient) { }

  getQuery(query: string){
    const url = `http://localhost:80/${query}`;
    console.log(url);
    return this.http.get(url);
}
getLugar(): Observable<any>{
    const url='lugar';
    return this.getQuery(url);

}

getLugarById(id: string) {
  const url = 'lugar';
return this.getQuery(url);
}
}
