import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.scss']
})
export class LoguinComponent implements OnInit {
  loginForm: FormGroup;
  constructor( private formulario: FormBuilder) {
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
    console.log(this.loginForm.value.correo + ' ' + this.loginForm.value.password);
  }

}
