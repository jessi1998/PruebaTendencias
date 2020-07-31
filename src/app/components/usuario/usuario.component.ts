import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  usuarioForm: FormGroup;
  constructor(private _builder: FormBuilder, private usuarioService: UsuarioService) {
    this.usuarioForm = this._builder.group({
        nombre_usuario: ['', Validators.required],
        apellido_usuario: ['', Validators.required],
        direccion_usuario: ['', Validators.required],
        correo_usuario: ['', Validators.required],
      password_usuario: ['', Validators.required]
    }
  )
    console.log("CORRECTO");
  }

  ngOnInit(): void {
  }
  get nombre_usuario() {return this.usuarioForm.get('nombre_usuario');}
  get apelido_usuario() {return this.usuarioForm.get('apelido_usuario');}
  get direccion_usuario(){ return this.usuarioForm.get('direccion_usuario');}
  get correo_usuario() { return this.usuarioForm.get('correo_usuario');}
  get password_usuario(){return this.usuarioForm.get('password_usuario');}



}
