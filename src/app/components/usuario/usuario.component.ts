import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../../modelos/usuario.modelos';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  signupForm: FormGroup;


  constructor( private formulario: FormBuilder, private userService: UsuarioService) {
    this.signupForm = this.formulario.group({

      //Se crean los nombres a utilizar en el html los cuales necesitan ser obligatorios
      nombre: ['', Validators.required],
      apellido: ['', Validators.required ],
      correo: ['', Validators.required],
      password: ['', Validators.required],
  
    });
  }
  enviar(values) {
    console.log(values);
    console.log(this.signupForm.value.nombre);
    return values;

  }
  
 
  ngOnInit(): void {
  }

  saveNew(){
    //Se crea un array de tipo Usuario
    const user: Usuario = {nombre: this.signupForm.value.nombre, apellido: this.signupForm.value.apellido,
      correo: this.signupForm.value.correo, password: this.signupForm.value.password};
    console.log(user);

   //Se hace el metodo post para guardar en la DB
    this.userService.addNewUser(user).subscribe((data: Usuario)=> {
      console.log(data);
      alert('Usuario registrado exitosamente ☺');
    });

  }
}
