import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.scss']
})
export class LoguinComponent implements OnInit {
  usuario: string;
  contrasenia: string;
  user = 'xavier.y.2013@gmail.com';
  password = '1234';
  constructor() { }

  ngOnInit(): void {
  }

  onLogin(){
    console.log(this.usuario);
    console.log(this.contrasenia);
    console.log(this.user);

    if (this.usuario == undefined || this.contrasenia == undefined) {

      alert('Ingrese las credenciales');
    } else {
      if (this.usuario == this.user && this.contrasenia == this.password){
        console.log('usuario correcto')
        alert('Usuario Correcto');
      } else {
        alert('Usuario Incorrecto');
      }
    }
  }

}
