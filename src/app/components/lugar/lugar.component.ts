import { Component, OnInit } from '@angular/core';
import * as AWS from 'aws-sdk';
import { async } from '@angular/core/testing';
import { LugarService } from '../../servicios/lugar.service';
import { Lugar } from '../../modelos/lugar.modelos';


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
  urlImagen = null;
  error = false;
  subiendo = false;
  lugar: Lugar={nombre:'',descripcion:'',actividades:''};


  constructor(private lugarservice: LugarService) {
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

        this.urlImagen = data.Location;
        alert( this.urlImagen = data.Location);
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
    const newLugar={nombre:'Baños de agua santa', actividades:'Acampar, Nadar, Pesca',descripcion:'Ubicada en ambato',imagen1:'hhtp://hh//gg',imagen2:'hhtp://hh//img2'}
    this.lugarservice.addNewLugar(this.lugar).subscribe(data=>console.log(data))
  }

  onSubmit(){
    console.log(this.lugar);
    this.lugarservice.addNewLugar(this.lugar).subscribe(data=>console.log(data))

  }

  }


