import { Component, OnInit } from '@angular/core';
import * as AWS from 'aws-sdk';
import { async } from '@angular/core/testing';
import { LugarService } from '../../servicios/lugar.service';
import { Lugar } from '../../modelos/lugar.modelos';
import { Direccion } from '../../modelos/direccion.modelos';
import { DireccionService } from '../../servicios/direccion.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.scss']
})
export class LugarComponent implements OnInit {
  registerForm: FormGroup;
  albumBucketName = 'practica1';
  s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: { Bucket: 'practica1' },
  });
  showImagen = false;
  archivo = null;
  urlImagen1 = null;
  error = false;
  subiendo = false;
  id_direccion: number;

  constructor(private formulario: FormBuilder, private lugarservice: LugarService, private direccionservice: DireccionService) {

    this.registerForm = this.formulario.group({

      //Se crean los nombres a utilizar en el html los cuales son obligatorios
      nombre: ['', Validators.required],
      descripcion: ['',Validators.required ],
      actividades: ['',Validators.required ],
      pais: ['',Validators.required ],
      provincia: ['',Validators.required ],
      ciudad: ['',Validators.required ],
      parroquia:['',Validators.required]
    });
     // Inicializar el proveedor de credenciales de Amazon Cognito
    AWS.config.region = 'us-east-1'; // Región
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
       IdentityPoolId: 'us-east-1:be50ae8d-3cf4-40d1-8db7-e17e54bee2b4',
     });
   }
   enviar(values) {
    console.log(values);
    return values;

  }
  ngOnInit(): void {
  }
  onClickSubir = async (event) => {
    event.preventDefault();

    if (this.archivo) {
      try {
        console.log(this.archivo);
        this.subiendo = true;
        const data = await new AWS.S3.ManagedUpload({
          params: {
            Bucket: this.albumBucketName,
            Key: this.archivo.name,
            Body: this.archivo,
            ACL: 'public-read',
          },
        }).promise();
        this.urlImagen1 = data.Location;
        alert( this.urlImagen1 = data.Location);
        console.log('********' , this.urlImagen1);
        this.subiendo = false;
        this.showImagen = true;
      } catch (error) {
        this.error = true;
        const bucle = setInterval(() => {
          this.error = false;
          clearInterval(bucle);
        }, 2000);
      }
    } else {
      alert('SELECCIONE UN ARCHIVO');
    }
  };

  onChange = (event) => {
    if (event.target.files.length > 0) {
      this.archivo = event.target.files[0];
    }
  };

  saveNew() {
     //Se crea un array de tipo Direccion
    const direccion: Direccion ={pais:this.registerForm.value.pais,
      provincia:this.registerForm.value.provincia,ciudad:this.registerForm.value.ciudad,parroquia:this.registerForm.value.parroquia}; 
    console.log(direccion)
     /*  // Se hace el metodo post para guardar en la BD
    this.direccionservice.addNewDireccion(direccion).subscribe((data: Direccion)=>{
      console.log(data);
      this.id_direccion = data.id_direccion;
      });*/
      //Se crea un array de tipo Lugar
    const lugar: Lugar={nombre:this.registerForm.value.nombre,descripcion:this.registerForm.value.descripcion,
        actividades:this.registerForm.value.actividades,imagen1:this.urlImagen1,id_direccion:this.id_direccion};
    console.log(lugar);
     /* // Se hace el metodo post para guardar en la BD
    this.lugarservice.addNewLugar(lugar).subscribe((data:Lugar)=>{
      console.log(data);
    });*/
  }
  }


