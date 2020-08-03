import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.scss']
})
export class LoguinComponent implements OnInit {
  usuario: '';
  contrasenia: '';
  user = 'usuario';
  password = '1234';

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(){
    console.log(this.usuario);
    console.log(this.contrasenia);
    if(this.usuario == this.user && this.contrasenia == this.password){
      console.log('Usuario Correcto');

    }
  }

}
