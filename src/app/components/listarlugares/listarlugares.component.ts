import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugarService } from '../../servicios/lugar.service';


@Component({
  selector: 'app-listarlugares',
  templateUrl: './listarlugares.component.html',
  styleUrls: ['./listarlugares.component.scss']
})
export class ListarlugaresComponent implements OnInit {
lugar:string;


  constructor(private lugarservice: LugarService) {}

  ngOnInit(): void {
  }

  Listar(){
    this.lugarservice.getLugar().subscribe(
      data=>{
        console.log(data);
      }
    )
  }

}
