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
  user:Usuario={nombre:'',apellido:'',correo:'',password:''};

  constructor( private userService:UsuarioService){}
  
 
  ngOnInit(): void {
  }

  saveNew(){
    console.log(this.user)
    this.userService.addNewUser(this.user).subscribe(
      data=>console.log(data));
    
    
   }


}
