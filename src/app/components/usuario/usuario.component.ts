import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../../modelos/usuario.modelos';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  nombre:'';
  apellido:'';
  correo:'';
  password:'';
  //user:Usuario={
  //  nombre:'' ,apellido:'',correo:'',password:''};

  constructor( private userService:UsuarioService){}
  
 
  ngOnInit(): void {
  }

  saveNew(){
    const user:Usuario={ nombre:this.nombre ,apellido:this.apellido,correo:this.correo,password:this.password}
    console.log(user)
    this.userService.addNewUser(user).subscribe(
    data=>console.log(data)); 
  }



}
