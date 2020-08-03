import { Component, OnInit } from '@angular/core';
import * as AWS from 'aws-sdk';
import { async } from '@angular/core/testing';
import { LugarService } from '../../servicios/lugar.service';
import { Lugar } from '../../modelos/lugar.modelos';
import { Direccion } from '../../modelos/direccion.modelos';
import { DireccionService } from '../../servicios/direccion.service';


@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.scss']
})
export class LugarComponent implements OnInit {
  albumBucketName = 'practica1';
  s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: { Bucket: 'practica1' },
  });
  showImagen = false;
  archivo = null;
  archivo2 =  null;
  urlImagen1 = null;
  urlImagen2 = null;
  error = false;
  subiendo = false;
  lugar: Lugar={nombre:'',descripcion:'',actividades:'',imagen1:this.urlImagen1};
  direccion: Direccion ={pais:'',provincia:'',ciudad:''}


  constructor(private lugarservice: LugarService, private direccionservice: DireccionService) {
     // Inicializar el proveedor de credenciales de Amazon Cognito
     AWS.config.region = 'us-east-1'; // Región
     AWS.config.credentials = new AWS.CognitoIdentityCredentials({
       IdentityPoolId: 'us-east-1:be50ae8d-3cf4-40d1-8db7-e17e54bee2b4',
     });
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
    }
    if (this.archivo2) {
      try {
        console.log(this.archivo2);
        this.subiendo = true;
        const data = await new AWS.S3.ManagedUpload({
          params: {
            Bucket: this.albumBucketName,
            Key: this.archivo2.name,
            Body: this.archivo2,
            ACL: 'public-read',
          },
        }).promise();
        this.urlImagen2 = data.Location;
        alert(this.urlImagen2 = data.Location);
        console.log('1');
        console.log(this.urlImagen2);
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

  saveNew(){
   console.log(this.lugar)
   console.log(this.direccion)
   // this.lugarservice.addNewLugar(this.lugar).subscribe(data=>console.log(data));
   this.direccionservice.addNewDireccion(this.direccion).subscribe(data=>console.log(data)); 
  }
  }


