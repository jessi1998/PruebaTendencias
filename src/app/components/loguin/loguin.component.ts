import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../modelos/usuario.modelos';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.scss']
})
export class LoguinComponent implements OnInit {
  loginForm: FormGroup;
  constructor( private formulario: FormBuilder, private usuarioService: UsuarioService) {
    this.loginForm = this.formulario.group({

      // Se crean los nombres a utilizar en el html los cuales son obligatorios
      correo: ['', Validators.required],
      password: ['', Validators.required ],
    });
   }
   enviar(values) {
    console.log(values);
    return values;

  }

  ngOnInit(): void {
  }

  onLogin(){
    const user: Usuario={correo:this.loginForm.value.correo,password:this.loginForm.value.password}
    console.log(this.loginForm.value.correo + ' ' + this.loginForm.value.password);
     this.usuarioService.loginuser(user.correo,user.password)
    .subscribe(data=>{
      console.log(data);
    })
    
  }

}
